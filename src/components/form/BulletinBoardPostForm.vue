<template>
  <div class="mx-auto p-4 max-w-xl flex-col">
    <h2 class="text-2xl font-bold mb-4">
      {{ isEdit ? $t('Home.postform.edit') : $t('Home.postform.title') }}
    </h2>

    <!-- 子フォーム。ここで @submit="submitPost" を受け取る -->
    <BulletinBoardForm
      v-model="formData"
      @submit="submitPost"
      :isReadOnly="false"
      :isEdit="isEdit"
    />

    <!-- エラー表示 -->
    <div v-if="errorMessages.length" class="text-red-500 mt-2">
      <ul>
        <li v-for="(msg, index) in errorMessages" :key="index">{{ msg }}</li>
      </ul>
    </div>

    <!-- ローディング -->
    <div v-if="state.loading" class="mt-2">
      <span class="text-blue-500">{{ $t('Home.postform.load') }}</span>
    </div>

    <!-- ファイル選択とプレビュー -->
    <div class="space-y-2 mt-4">
      <input
        type="file"
        @change="onFileChange"
        multiple
        class="w-full text-gray-700"
        :disabled="isEdit && !allowFileChange"
      />
      <AttachmentPreview :files="files" />
    </div>

    <!-- プレビューボタンと戻るボタン -->
    <div class="flex justify-between space-x-4 mt-4">
      <PostButton type="preview" @click="openPreview">
        {{ $t('Button.preview') }}
      </PostButton>
      <PostButton type="back" @click="goBack">
        {{ $t('Button.back') }}
      </PostButton>
    </div>

    <!-- プレビューモーダル -->
    <PreviewModal :isVisible="isPreviewVisible" @close="closePreview" title="プレビュー">
      <div>
        <p>
          <strong>{{ $t('Home.BulletinBoard.title') }}</strong> {{ formData.title }}
        </p>
        <p>
          <strong>{{ $t('Home.BulletinBoard.content') }}</strong> {{ formData.content }}
        </p>
      </div>
    </PreviewModal>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useBulletinBoardStore } from '@/stores/bulletinBoard.store'
import PostButton from '@/components/button/PostButton.vue'
import AttachmentPreview from '@/components/AttachmentPreview.vue'
import BulletinBoardForm from '@/components/form/BulletinBoardForm.vue'
import PreviewModal from '@/components/PreviewModal.vue'

export default defineComponent({
  name: 'BulletinBoardPostForm',
  components: {
    PostButton,
    AttachmentPreview,
    BulletinBoardForm,
    PreviewModal
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    },
    postId: {
      type: Number,
      required: false
    },
    initialData: {
      type: Object,
      required: false,
      default: () => ({ title: '', content: '' })
    },
    allowFileChange: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const router = useRouter()
    const bulletinBoardStore = useBulletinBoardStore()
    const files = ref([])
    const isPreviewVisible = ref(false)

    // フォームデータ
    const formData = ref({
      title: props.initialData.title,
      content: props.initialData.content
    })

    const errorMessages = computed(() => {
      if (bulletinBoardStore.state.error) {
        if (Array.isArray(bulletinBoardStore.state.error)) {
          return bulletinBoardStore.state.error
        } else {
          return [bulletinBoardStore.state.error]
        }
      }
      return []
    })

    // ファイルの変更
    const onFileChange = (event) => {
      const target = event.target
      if (target.files) {
        files.value = Array.from(target.files)
      }
    }

    // 子フォームが emit('submit', submittedData) → このメソッドを呼ぶ
    const submitPost = async (submittedData) => {
      try {
        if (props.isEdit && props.postId) {
          // 更新
          await bulletinBoardStore.updatePost(props.postId, {
            title: submittedData.title,
            content: submittedData.content
            // files -> 必要あれば
          })
          alert('投稿が更新されました。')
          router.push(`/detail/${props.postId}`)
        } else {
          // 新規
          await bulletinBoardStore.createBulletin({
            title: submittedData.title,
            content: submittedData.content,
            files: files.value
          })
          alert('投稿が作成されました。')
          router.push('/home')
        }
      } catch (error) {
        console.error('投稿の作成または更新に失敗しました:', error)
      }
    }

    // 新規: 特になし、編集: もし親自身でfetchしたいならここで fetch して formData更新
    // ただし今回は 'BulletinBoardEdit.vue' が fetch しているのでダブルフェッチ不要

    // 戻る
    const goBack = () => {
      router.push('/home')
    }

    // プレビュー
    const openPreview = () => {
      isPreviewVisible.value = true
    }
    const closePreview = () => {
      isPreviewVisible.value = false
    }

    return {
      formData,
      files,
      isPreviewVisible,
      errorMessages,
      onFileChange,
      submitPost,
      goBack,
      openPreview,
      closePreview,
      state: bulletinBoardStore.state
    }
  }
})
</script>
