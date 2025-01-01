<!-- src/views/BulletinBoardEdit.vue -->
<template>
  <div class="container mx-auto p-4">
    <div v-if="loading">
      <p>読み込み中...</p>
    </div>
    <div v-else>
      <BulletinBoardPostForm
        :isEdit="true"
        :postId="postId"
        :initialData="postDetail"
        :allowFileChange="true"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BulletinBoardPostForm from '@/components/form/BulletinBoardPostForm.vue'
import { useBulletinBoardStore } from '@/stores/bulletinBoard.store'

export default defineComponent({
  name: 'BulletinBoardEdit',
  components: { BulletinBoardPostForm },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = useBulletinBoardStore()

    const postId = Number(route.params.id)
    const postDetail = ref({ title: '', content: '' })
    const loading = ref(true)

    onMounted(async () => {
      try {
        await store.fetchPostDetail(postId)
        if (store.postDetail) {
          postDetail.value = {
            title: store.postDetail.title,
            content: store.postDetail.content
          }
        }
      } catch (error) {
        alert('投稿詳細の取得に失敗しました。')
        router.push('/home')
      } finally {
        loading.value = false
      }
    })

    return {
      postId,
      postDetail,
      loading
    }
  }
})
</script>
