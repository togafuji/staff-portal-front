// src/composition/login.composition.ts

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { LoginRepository } from '@/repositories/login.repository'
import type { LoginRequest } from '@/entity/login.entity'
import { useAuthStore } from '@/stores/auth' // Pinia ストアのインポート

export function useAuth() {
  const router = useRouter()
  const email = ref<string>('')
  const password = ref<string>('')
  const error = ref<string | null>(null)
  const authStore = useAuthStore() // ストアの使用

  const login = async () => {
    try {
      const requestData: LoginRequest = {
        email: email.value,
        password: password.value
      }
      const response = await LoginRepository.login(requestData)

      // レスポンスヘッダーからトークンを取得
      const authHeader = response.headers['authorization'] || response.headers['Authorization']
      if (authHeader) {
        const token = authHeader.split(' ').pop()
        if (token) {
          // レスポンスボディにユーザー情報が含まれていると仮定
          const userName = response.data.username || 'ゲスト'
          const userIcon = response.data.userIconUrl || '/noimage.png'
          const userId = response.data.userId // ユーザーIDを取得

          if (!userId) {
            throw new Error('ユーザーIDがレスポンスに含まれていません')
          }

          authStore.login(token, userName, userIcon, userId) // ストアの更新
        }
      }

      router.push('/home')
    } catch (err: any) {
      console.error('ログインに失敗しました:', err)
      if (err.response && err.response.data && err.response.data.error) {
        error.value = err.response.data.error
      } else {
        error.value = 'ログインに失敗しました'
      }
    }
  }

  const logout = async () => {
    try {
      await LoginRepository.logout()
      authStore.logout() // ストアの更新
      router.push('/login')
    } catch (err: any) {
      error.value = 'ログアウトに失敗しました'
    }
  }

  return {
    email,
    password,
    error,
    login,
    logout
  }
}
