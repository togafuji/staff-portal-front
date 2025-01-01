<template>
  <!-- 自動送信防止と簡単なバリデーションのために @submit.prevent を使う -->
  <form @submit.prevent="handleSubmit">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
        {{ $t('Home.BulletinBoard.title') }}
      </label>
      <input
        v-model="formData.title"
        id="title"
        type="text"
        :readonly="isReadOnly"
        required
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="content">
        {{ $t('Home.BulletinBoard.content') }}
      </label>
      <textarea
        v-model="formData.content"
        id="content"
        :readonly="isReadOnly"
        required
        rows="5"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      ></textarea>
    </div>

    <!-- 添付ファイルの入力フィールド -->
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="files">
        {{ $t('Home.postform.attachment') }}
      </label>
      <input
        id="files"
        type="file"
        multiple
        @change="handleFileChange"
        :disabled="isReadOnly"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>

    <!-- ボタン -->
    <div v-if="!isReadOnly" class="flex justify-end">
      <PostButton type="submit">
        {{ isEdit ? $t('Button.save') : $t('Button.submit') }}
      </PostButton>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from 'vue'
import PostButton from '@/components/button/PostButton.vue'
import type { FormData as BulletinBoardFormData } from '@/entity/bulletinBoard.entity'

export default defineComponent({
  name: 'BulletinBoardForm',
  components: { PostButton },
  props: {
    modelValue: {
      type: Object as () => Partial<BulletinBoardFormData>,
      required: false,
      default: () => ({ title: '', content: '' })
    },
    isReadOnly: {
      type: Boolean,
      default: false
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'submit'],
  setup(props, { emit }) {
    const formData = reactive<BulletinBoardFormData>({
      title: props.modelValue.title || '',
      content: props.modelValue.content || '',
      files: []
    })

    // 親から v-model で受け取った変更を適用
    watch(
      () => props.modelValue,
      (newData) => {
        formData.title = newData.title || ''
        formData.content = newData.content || ''
        // filesは通常ここでは上書きしない
      },
      { immediate: true, deep: true }
    )

    // ファイル選択時
    const handleFileChange = (event: Event) => {
      const target = event.target as HTMLInputElement
      if (target.files) {
        formData.files = Array.from(target.files)
        emit('update:modelValue', { ...formData })
      }
    }

    // 入力値が変わるたびに v-model を更新
    watch(
      formData,
      (newFormData) => {
        emit('update:modelValue', { ...newFormData })
      },
      { deep: true }
    )

    // フォーム送信ボタンをクリックすると発火
    const handleSubmit = () => {
      // 親コンポーネントの submitPost(submittedData) が呼ばれる
      emit('submit', { ...formData })
    }

    return {
      formData,
      handleSubmit,
      handleFileChange
    }
  }
})
</script>
