import { computed, ref } from 'vue'
import { useBulletinBoardStore } from '@/stores/bulletinBoard.store'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useReadStatus } from '@/composition/readStatus.composition'
import type { BulletinBoardItem } from '@/entity/bulletinBoard.entity'

export const useBulletinBoard = () => {
  const store = useBulletinBoardStore()
  const authStore = useAuthStore()
  const router = useRouter()
  const { markAsRead, fetchReadStatus, readStatus } = useReadStatus()

  const paginatedPosts = computed(() => store.paginatedPosts || [])
  const totalPages = computed(() => store.totalPages)
  const userId = authStore.userId

  const fetchPost = async () => {
    await store.fetchPosts()

    if (!userId) {
      console.error('User ID is not available')
      return
    }

    // 未読フラグを更新
    for (const post of store.posts) {
      const status = await fetchReadStatus(userId, post.id) // 非同期処理を待機
      readStatus.value[post.id] = status.is_read
    }

    console.log('Updated readStatus:', readStatus.value) // デバッグ用ログ
  }

  const fetchPostDetail = async (id: number) => {
    await store.fetchPostDetail(id)
  }

  const handleChangePage = async (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
      store.currentPage = page
      await store.fetchPosts()

      if (!userId) {
        console.error('User ID is not available')
        return
      }

      // 未読フラグを更新
      for (const post of paginatedPosts.value) {
        const status = await fetchReadStatus(userId, post.id)
        readStatus.value[post.id] = status.is_read
      }
    }
  }

  const goToDetail = async (postId: number) => {
    const userId = authStore.userId
    if (!userId) {
      console.error('User ID is not available')
      return
    }

    // 既読状態を更新
    await markAsRead(userId, postId)

    // 詳細ページに遷移
    router.push(`/detail/${postId}`)
  }

  const goToCreatePost = () => {
    router.push('/create')
  }

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const isRead = (id: number) => computed(() => Boolean(readStatus.value[id]))

  return {
    paginatedPosts,
    currentPage: computed(() => store.currentPage),
    totalPages,
    loading: computed(() => store.state.loading),
    error: computed(() => store.state.error),
    handleChangePage,
    goToDetail,
    goToCreatePost,
    formatDate,
    fetchPost,
    fetchPostDetail,
    isRead
  }
}
