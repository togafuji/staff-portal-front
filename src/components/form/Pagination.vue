<!-- src/components/Pagination.vue -->
<template>
  <div class="flex flex-col items-center space-y-2">
    <div class="flex space-x-2">
      <!-- 最初のページボタン: 1 -->
      <button
        v-if="totalPages > 1"
        @click="goToPage(1)"
        :class="[
          'px-4 py-2 rounded-md',
          currentPage === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400'
        ]"
      >
        1
      </button>

      <!-- 中間ページの省略 -->
      <span v-if="totalPages > 2" class="text-gray-500 px-2">...</span>

      <!-- 最後のページボタン: totalPages -->
      <button
        v-if="totalPages > 1"
        @click="goToPage(totalPages)"
        :class="[
          'px-4 py-2 rounded-md',
          currentPage === totalPages ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400'
        ]"
      >
        {{ totalPages }}
      </button>
    </div>

    <!-- ページ番号入力フォーム -->
    <div class="flex items-center space-x-2">
      <label for="pageInput" class="text-sm font-semibold">ページ番号入力:</label>
      <input
        id="pageInput"
        type="number"
        v-model.number="pageInput"
        @keyup.enter="jumpToPage"
        class="w-20 px-2 py-1 border border-gray-300 rounded-md"
        :min="1"
        :max="totalPages"
      />
      <button
        @click="jumpToPage"
        class="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        移動
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'PaginationControl',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  emits: ['changePage'],
  setup(props, { emit }) {
    // 入力したページ番号を保持
    const pageInput = ref(props.currentPage)

    // PropsのcurrentPageが変わったらpageInputも更新
    watch(
      () => props.currentPage,
      (newPage) => {
        pageInput.value = newPage
      }
    )

    /**
     * 特定のページへ移動
     */
    const goToPage = (page) => {
      emit('changePage', page)
      pageInput.value = page
    }

    /**
     * 入力欄からジャンプ
     */
    const jumpToPage = () => {
      let page = pageInput.value
      if (page < 1) page = 1
      if (page > props.totalPages) page = props.totalPages
      if (page !== props.currentPage) {
        emit('changePage', page)
      }
    }

    return {
      pageInput,
      goToPage,
      jumpToPage
    }
  }
})
</script>
