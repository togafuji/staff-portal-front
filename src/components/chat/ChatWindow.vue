<template>
  <div>
    <h2>{{ currentChat?.title || 'チャット' }}</h2>
    <div v-for="message in messages" :key="message.id">
      <strong>{{ message.userId }}:</strong> {{ message.content }}
    </div>
    <input v-model="newMessage" placeholder="メッセージを入力" @keyup.enter="sendMessage" />
    <button @click="sendMessage">送信</button>
  </div>
</template>

<script setup>
import { useChat } from '@/compositions/chat.composition'

const { currentChat, messages, newMessage, sendMessage } = useChat()
</script>
