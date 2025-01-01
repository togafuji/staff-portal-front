// src/stores/bulletinBoard.store.ts
import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'
import { BulletinBoardRepository } from '@/repositories/bulletinBoard.repository'
import type { BulletinBoardItem, CreateBulletinBoardPayload } from '@/entity/bulletinBoard.entity'

// ストアが持つデータの型を定義
interface BulletinBoardState {
  posts: BulletinBoardItem[]
  postDetail: BulletinBoardItem | null // 文字列ではなく BulletinBoardItem の方が正しい
  loading: boolean
  error: string | null
  currentPage: number
  pageSize: number
}

export const useBulletinBoardStore = defineStore('bulletinBoard', () => {
  const state = reactive<BulletinBoardState>({
    posts: [],
    postDetail: null,
    loading: false,
    error: null,
    currentPage: 1, // ページネーションの現在ページ
    pageSize: 5 // 1ページあたりの投稿数
  })

  const fetchPosts = async () => {
    state.loading = true
    state.error = null
    try {
      const data = await BulletinBoardRepository.fetchBulletinBoards()
      state.posts = data
    } catch (error) {
      state.error = '掲示板データの取得に失敗しました。'
    } finally {
      state.loading = false
    }
  }

  const fetchPostDetail = async (id: number) => {
    state.loading = true
    state.error = null
    try {
      const data = await BulletinBoardRepository.fetchBulletinDetail(id)
      state.postDetail = data
    } catch (error) {
      state.error = '投稿詳細データの取得に失敗しました。'
    } finally {
      state.loading = false
    }
  }

  const createBulletin = async (payload: CreateBulletinBoardPayload) => {
    // エラー処理など必要に応じて追加
    const newPost = await BulletinBoardRepository.createBulletin(payload)
    state.posts.unshift(newPost) // 新しい投稿を先頭に追加
  }

  const updatePost = async (id: number, payload: CreateBulletinBoardPayload) => {
    const updatedPost = await BulletinBoardRepository.updateBulletin(id, payload)
    const index = state.posts.findIndex((post) => post.id === id)
    if (index !== -1) {
      state.posts[index] = updatedPost
    }
    if (state.postDetail && state.postDetail.id === id) {
      state.postDetail = updatedPost
    }
  }

  const deletePost = async (id: number) => {
    try {
      await BulletinBoardRepository.deleteBulletin(id)
      state.posts = state.posts.filter((post) => post.id !== id)
      if (state.postDetail && state.postDetail.id === id) {
        state.postDetail = null
      }

      // 削除後に総ページ数を再計算
      const newTotalPages = Math.ceil(state.posts.length / state.pageSize)

      // currentPage が newTotalPages を超えている場合、currentPage を調整
      if (state.currentPage > newTotalPages) {
        state.currentPage = newTotalPages > 0 ? newTotalPages : 1
      }
    } catch (error: any) {
      state.error = error.message || '投稿の削除に失敗しました。'
      throw error
    }
  }

  const paginatedPosts = computed(() => {
    const start = (state.currentPage - 1) * state.pageSize
    const end = start + state.pageSize
    return state.posts.slice(start, end)
  })

  const totalPages = computed(() => {
    return Math.ceil(state.posts.length / state.pageSize)
  })

  return {
    state,
    posts: computed(() => state.posts),
    postDetail: computed(() => state.postDetail),
    currentPage: computed({
      get: () => state.currentPage,
      set: (val: number) => {
        state.currentPage = val
      }
    }),
    pageSize: computed(() => state.pageSize),
    paginatedPosts,
    totalPages,
    fetchPosts,
    fetchPostDetail,
    createBulletin,
    updatePost,
    deletePost
  }
})
