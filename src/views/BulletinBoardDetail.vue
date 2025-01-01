<!-- src/views/BulletinBoardDetail.vue -->
<template>
  <div class="container mx-auto p-4 max-w-xl space-y-4">
    <h2 class="text-2xl font-bold mb-4">{{ $t('Home.detail.content') }}</h2>

    <!-- 読み取り専用フォーム表示 -->
    <BulletinBoardForm v-if="bulletin" v-model="formData" :isReadOnly="true" />

    <!-- 添付ファイルのプレビュー -->
    <AttachmentPreview v-if="bulletin" :files="bulletinFiles" class="mt-4" />

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

    <!-- エラー表示 -->
    <p v-if="error" class="text-red-500 text-xs italic mt-4">{{ error }}</p>
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
import { useBulletinBoard } from '@/composition/bulletinBoard.composition'

export default defineComponent({
  name: 'BulletinBoardDetail',
  components: { PostButton, AttachmentPreview, BulletinBoardForm },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const store = useBulletinBoardStore()
    const authStore = useAuthStore()
    const { markAsRead } = useBulletinBoard()

    const id = Number(route.params.id)
    const error = ref<string | null>(null)

    // 読み取り専用フォームのデータ
    const formData = ref<{ title: string; content: string }>({ title: '', content: '' })

    // モーダルの表示管理
    const showDeleteModal = ref(false)

    // onMounted で詳細をフェッチ
    onMounted(async () => {
      try {
        await store.fetchPostDetail(id)
        await markAsRead(id) // 既読

        // 所有者チェック
        if (authStore.userId !== store.postDetail?.userId) {
          alert('この投稿を編集する権限がありません。')
          router.push('/home')
        } else {
          // 所有者なら formData にストアから反映
          if (store.postDetail) {
            formData.value = {
              title: store.postDetail.title,
              content: store.postDetail.content
            }
          }
        }
      } catch (err) {
        error.value = '投稿詳細の取得に失敗しました。'
      }
    })

    // コンピューテッド
    const bulletin = computed<BulletinBoardItem | null>(() => store.postDetail)
    const bulletinFiles = computed(() => bulletin.value?.files || [])

    // 所有者判定
    const isOwner = computed(() => {
      if (authStore.userId === null || bulletin.value?.userId === undefined) {
        return false
      }
      return authStore.userId === bulletin.value.userId
    })

    // 編集ボタン
    const goToEdit = (): void => {
      router.push(`/detail/${id}/edit`)
    }

    // 戻る
    const goBack = (): void => {
      router.push('/home')
    }

    // 削除ボタンが押された時
    const confirmDelete = (): void => {
      showDeleteModal.value = true
    }

    // モーダルのキャンセル
    const cancelDelete = (): void => {
      showDeleteModal.value = false
    }

    // 実際に投稿を削除
    const deleteBulletinBoard = async (): Promise<void> => {
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
