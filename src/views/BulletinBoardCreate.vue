<!-- src/views/BulletinBoardCreate.vue -->
<template>
  <div class="container mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4">{{ $t('Home.postform.new') }}</h2>
    <BulletinBoardPostForm @submit="handleSubmit" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import BulletinBoardPostForm from '@/components/BulletinBoardPostForm.vue'
import { useBulletinBoardStore } from '@/stores/bulletinBoard.store'

export default defineComponent({
  name: 'BulletinBoardCreate',
  components: { BulletinBoardPostForm },
  setup() {
    const store = useBulletinBoardStore()

    const handleSubmit = async (formData) => {
      try {
        await store.createBulletin({
          title: formData.title,
          content: formData.content,
          files: formData.files
        })
        alert('投稿が作成されました。')
        // 必要に応じてリダイレクト
      } catch (error) {
        alert('投稿の作成に失敗しました。')
      }
    }

    return {
      handleSubmit
    }
  }
})
</script>
