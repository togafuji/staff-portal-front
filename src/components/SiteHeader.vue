<template>
  <div>
    <!-- ヘッダー部分 -->
    <header
      class="bg-[#78c2f683] h-20 flex items-center justify-between px-10 fixed top-0 left-0 right-0 z-50"
    >
      <div>
        <h1 class="text-red-700 text-4xl">{{ $t('Header.title') }}</h1>
      </div>
      <!-- 右端にユーザー情報とログアウトボタン -->
      <div v-if="authStore.isLoggedIn" class="flex items-center space-x-4">
        <img :src="authStore.userIcon" alt="User Icon" class="w-10 h-10 rounded-full mr-4" />
        <span class="text-lg font-semibold">{{ authStore.userName }}</span>
        <button
          @click="handleLogout"
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {{ $t('Login.out') }}
        </button>
      </div>
    </header>

    <!-- ナビゲーションバー -->
    <nav
      v-if="authStore.isLoggedIn"
      class="min-h-[45px] text-2xl border-b border-black bg-white fixed top-20 left-0 right-0 z-40"
    >
      <ul class="flex justify-between items-center w-full px-10">
        <li>
          <router-link
            to="/home"
            class="flex items-center text-gray-400"
            exact-active-class="text-green-600"
          >
            <font-awesome-icon :icon="['fas', 'home']" class="mr-2" />
            {{ $t('Header.nav.home') }}
          </router-link>
        </li>
        <li>
          <router-link
            to="/chat"
            class="text-gray-300 flex items-center"
            exact-active-class="text-green-600"
          >
            <font-awesome-icon :icon="['fas', 'comments']" class="mr-2" />
            {{ $t('Header.nav.chat') }}
          </router-link>
        </li>
        <li>
          <router-link
            to="/schedule"
            class="text-gray-300 flex items-center"
            exact-active-class="text-green-600"
          >
            <font-awesome-icon :icon="['fas', 'calendar']" class="mr-2" />
            {{ $t('Header.nav.schedule') }}
          </router-link>
        </li>
        <li>
          <router-link
            to="/attendance"
            class="text-gray-300 flex items-center"
            exact-active-class="text-green-600"
          >
            <font-awesome-icon :icon="['fas', 'user-check']" class="mr-2" />
            {{ $t('Header.nav.attendance') }}
          </router-link>
        </li>
        <li>
          <router-link
            to="/share"
            class="text-gray-300 flex items-center"
            exact-active-class="text-green-600"
          >
            <font-awesome-icon :icon="['fas', 'share-alt']" class="mr-2" />
            {{ $t('Header.nav.share') }}
          </router-link>
        </li>
        <li>
          <router-link
            to="/config"
            class="text-gray-300 flex items-center"
            exact-active-class="text-green-600"
          >
            <font-awesome-icon :icon="['fas', 'cog']" class="mr-2" />
            {{ $t('Header.nav.config') }}
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- メインコンテンツ -->
    <main class="mt-[65px] pt-[65px]">
      <router-view />
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

export default defineComponent({
  setup() {
    const router = useRouter()
    const authStore = useAuthStore()

    // ログアウト処理
    const handleLogout = async () => {
      try {
        await authStore.logout()
        router.push('/login')
      } catch (err) {
        console.error('ログアウトに失敗しました')
      }
    }

    return {
      authStore,
      handleLogout
    }
  }
})
</script>

<style scoped>
.text-red-500 {
  color: #f56565;
}
</style>
