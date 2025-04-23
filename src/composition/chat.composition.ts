import { ref, computed } from 'vue'
import { useChatStore } from '@/stores/chat.store'
import { ChatRepository } from '@/repositories/chat.repository'
import type { Chat } from '@/entity/chat.entity'

export function useChat() {
  const chatStore = useChatStore()
  const newMessage = ref<string>('')

  const chats = computed(() => chatStore.chats)
  const currentChat = computed(() => chatStore.currentChat)
  const messages = computed(() => chatStore.messages)

  const fetchChats = async () => {
    const chats = await ChatRepository.fetchChats()
    chatStore.setChats(chats)
  }

  const fetchMessages = async (chatId: number) => {
    const messages = await ChatRepository.fetchMessages(chatId)
    chatStore.setMessages(messages)
  }

  const selectChat = async (chat: Chat) => {
    chatStore.setCurrentChat(chat)
    await fetchMessages(chat.id)
  }

  const sendMessage = async () => {
    if (!chatStore.currentChat || !newMessage.value.trim()) return
    await ChatRepository.sendMessage(chatStore.currentChat.id, newMessage.value)
    newMessage.value = ''
    await fetchMessages(chatStore.currentChat.id)
  }

  return {
    chats,
    currentChat,
    messages,
    newMessage,
    fetchChats,
    fetchMessages,
    selectChat,
    sendMessage
  }
}
