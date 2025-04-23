<template>
  <div>
    <h2>チャット一覧</h2>
    <ul>
      <li v-for="chat in chats" :key="chat.id" @click="selectChat(chat)">
        {{ chat.title || 'グループチャット' }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useChat } from '@/composition/chat.composition'

const { chats, fetchChats, selectChat } = useChat()

onMounted(() => {
  fetchChats()
})
</script>
