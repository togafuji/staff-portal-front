import { defineStore } from 'pinia'
import { fetchReadStatus, markAsRead } from '@/repositories/readStatus.repository'

export const useReadStatusStore = defineStore('readStatus', {
  state: () => ({
    readStatus: {} as Record<number, boolean>
  }),
  actions: {
    async fetchReadStatus(userId: number, postId: number) {
      const status = await fetchReadStatus(userId, postId)
      this.readStatus[postId] = status.is_read
      return status
    },
    async markAsRead(userId: number, postId: number) {
      await markAsRead(userId, postId)
      this.readStatus[postId] = true
    }
  }
})
