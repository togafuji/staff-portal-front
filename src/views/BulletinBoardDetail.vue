<template>
  <div class="container mx-auto p-4 max-w-xl space-y-4">
    <h2 class="text-2xl font-bold mb-4">{{ $t('Home.detail.content') }}</h2>

    <!-- ローディング状態 -->
    <div v-if="!bulletin && !error" class="text-gray-500">読み込み中...</div>

    <!-- 読み取り専用フォーム表示 -->
    <BulletinBoardForm v-else-if="bulletin" v-model="formData" :isReadOnly="true" />

    <!-- 添付ファイルのプレビュー -->
    <AttachmentPreview v-if="bulletinFiles.length > 0" :files="bulletinFiles" class="mt-4" />

    <!-- エラー表示 -->
    <p v-else class="text-red-500">{{ error }}</p>

    <!-- 編集 / 削除ボタン -->
    <div v-if="isOwner" class="flex space-x-4 mt-4">
      <PostButton type="edit" @click="goToEdit" class="bg-yellow-500 hover:bg-yellow-700">
        {{ $t('Button.edit') }}
      </PostButton>
      <PostButton type="delete" @click="confirmDelete" class="bg-red-500 hover:bg-red-700">
        {{ $t('Button.delete') }}
      </PostButton>
    </div>

    <!-- 戻るボタン -->
    <PostButton type="back" @click="goBack" class="mt-6">
      {{ $t('Button.back') }}
    </PostButton>

    <!-- 削除確認モーダル -->
    <div
      v-if="showDeleteModal"
      class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center"
    >
      <div class="bg-white p-6 rounded shadow-lg w-80">
        <h3 class="text-xl font-bold mb-4">{{ $t('Home.detail.modal.confirm') }}</h3>
        <p>{{ $t('Home.detail.modal.caution') }}</p>
        <div class="flex justify-end space-x-4 mt-4">
          <button
            @click="cancelDelete"
            class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
          >
            {{ $t('Home.detail.cancel') }}
          </button>
          <button
            @click="deleteBulletinBoard"
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            {{ $t('Home.detail.delete') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useBulletinBoardStore } from '@/stores/bulletinBoard.store'
import { useAuthStore } from '@/stores/auth'
import PostButton from '@/components/button/PostButton.vue'
import AttachmentPreview from '@/components/AttachmentPreview.vue'
import BulletinBoardForm from '@/components/form/BulletinBoardForm.vue'
import type { BulletinBoardItem } from '@/entity/bulletinBoard.entity'
import { useReadStatus } from '@/composition/readStatus.composition'

export default defineComponent({
  name: 'BulletinBoardDetail',
  components: { PostButton, AttachmentPreview, BulletinBoardForm },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const store = useBulletinBoardStore()
    const authStore = useAuthStore()
    const { markAsRead } = useReadStatus()

    const id = Number(route.params.id)
    const error = ref<string | null>(null)

    const formData = ref<{ title: string; content: string }>({ title: '', content: '' })
    const showDeleteModal = ref(false)

    onMounted(async () => {
      try {
        await store.fetchPostDetail(id)
        if (store.postDetail) {
          await markAsRead(authStore.userId as number, id)
          formData.value = {
            title: store.postDetail.title,
            content: store.postDetail.content
          }
        }
      } catch (err) {
        console.error(err)
        error.value = '投稿の詳細を取得できませんでした。'
        router.push('/home')
      }
    })

    const bulletin = computed<BulletinBoardItem | null>(() => store.postDetail)
    const bulletinFiles = computed(() => bulletin.value?.files || [])
    const isOwner = computed(() => authStore.userId === bulletin.value?.userId)

    const goToEdit = () => router.push(`/detail/${id}/edit`)
    const goBack = () => router.push('/home')
    const confirmDelete = () => (showDeleteModal.value = true)
    const cancelDelete = () => (showDeleteModal.value = false)

    const deleteBulletinBoard = async () => {
      try {
        await store.deletePost(id)
        showDeleteModal.value = false
        alert('投稿を削除しました。')
        router.push('/home')
      } catch (err) {
        console.error('削除に失敗しました', err)
        alert('削除に失敗しました。')
      }
    }

    return {
      formData,
      bulletin,
      bulletinFiles,
      isOwner,
      goBack,
      goToEdit,
      confirmDelete,
      cancelDelete,
      deleteBulletinBoard,
      error,
      showDeleteModal
    }
  }
})
</script>
