import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Chat, Message } from '@/entity/chat.entity'

export const useChatStore = defineStore('chat', () => {
  const chats = ref<Chat[]>([])
  const currentChat = ref<Chat | null>(null)
  const messages = ref<Message[]>([])

  const setChats = (newChats: Chat[]) => {
    chats.value = newChats
  }

  const setCurrentChat = (chat: Chat | null) => {
    currentChat.value = chat
  }

  const setMessages = (newMessages: Message[]) => {
    messages.value = newMessages
  }

  return {
    chats,
    currentChat,
    messages,
    setChats,
    setCurrentChat,
    setMessages
  }
})
