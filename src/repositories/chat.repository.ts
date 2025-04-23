import axios from '@/axios'
import type { Chat, Message } from '@/entity/chat.entity'

export class ChatRepository {
  static async fetchChats(): Promise<Chat[]> {
    const response = await axios.get('/api/v1/chats')
    return response.data
  }

  static async fetchMessages(chatId: number): Promise<Message[]> {
    const response = await axios.get(`/api/v1/chats/${chatId}/messages`)
    return response.data
  }

  static async sendMessage(chatId: number, content: string): Promise<Message> {
    const response = await axios.post(`/api/v1/chats/${chatId}/messages`, { content })
    return response.data
  }

  static async createChat(title: string): Promise<Chat> {
    const response = await axios.post('/api/v1/chats', { title })
    return response.data
  }

  static async inviteUser(chatId: number, email: string): Promise<void> {
    await axios.post(`/api/v1/chats/${chatId}/invite_user`, { email })
  }

  static async leaveChat(chatId: number): Promise<void> {
    await axios.post(`/api/v1/chats/${chatId}/leave`)
  }
}
