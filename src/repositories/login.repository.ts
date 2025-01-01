// repositories/login.repository.ts
import axios from '@/axios'
import { LoginConstants } from '@/constants/login.constants'
import type { LoginRequest, LoginResponse } from '@/entity/login.entity'

export const LoginRepository = {
  async login(data: LoginRequest) {
    return axios.post<LoginResponse>(LoginConstants.LOCAL_API_URL_LOGIN, {
      user: {
        email: data.email,
        password: data.password
      }
    })
  },

  async logout(): Promise<void> {
    const token = localStorage.getItem('token')
    if (token) {
      await axios.delete(LoginConstants.LOCAL_API_URL_LOGOUT, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      localStorage.removeItem('token')
      localStorage.removeItem('userName')
      // localStorage.removeItem('userIcon');
    }
  }
}
