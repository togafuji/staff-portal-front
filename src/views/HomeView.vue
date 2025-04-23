<template>
  <div class="home-container flex flex-col items-center mt-10">
    <h1
      class="bg-black text-white text-3xl font-bold px-6 py-4 rounded-md w-2/5 text-center"
      style="letter-spacing: 1em; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6)"
    >
      {{ $t('Home.title') }}
    </h1>

    <!-- ローディング状態 -->
    <div v-if="loading" class="mt-20 text-3xl text-gray-500">ロード中...</div>

    <!-- エラー状態 -->
    <div v-else-if="error" class="mt-20 text-3xl text-red-500">
      {{ error }}
    </div>

    <!-- 投稿がない場合のメッセージ -->
    <div
      v-else-if="paginatedPosts.length === 0"
      class="mt-20 text-3xl text-gray-500 justify-center"
    >
      {{ $t('Home.nopost') }}
    </div>

    <!-- 投稿リスト -->
    <div v-else class="bg-white overflow-hidden mt-6 w-3/5 border border-black rounded-md">
      <div
        v-for="post in paginatedPosts"
        :key="post.id"
        class="flex items-center justify-between border border-black px-3 py-4 leading-loose"
      >
        <!-- 投稿内容 -->
        <div class="flex w-full">
          <!-- 日付 -->
          <span class="text-lg font-semibold w-1/4 text-left">{{
            formatDate(post.createdAt)
          }}</span>

          <!-- タイトル -->
          <span
            :class="{ 'text-gray-500': readStatus[post.id], 'text-black': !readStatus[post.id] }"
            class="w-2/4 text-center text-xl"
          >
            {{ post.title }}
          </span>

          <!-- 未読 -->
          <span v-if="!readStatus[post.id]" class="text-orange-500 font-bold w-1/4 text-right px-3">
            {{ $t('Home.unread') }}
          </span>
        </div>
        <button @click="goToDetail(post.id)" class="text-gray-400 hover:text-gray-600">→</button>
      </div>

      <!-- ページネーションを投稿リスト内に統合 -->
      <PaginationControl
        :currentPage="currentPage"
        :totalPages="totalPages"
        @changePage="handleChangePage"
      />
    </div>

    <!-- 投稿するボタン -->
    <div class="w-full flex justify-center mt-3">
      <button
        @click="goToCreatePost"
        class="px-20 py-3 bg-blue-500 text-2xl text-white font-bold rounded-md hover:bg-blue-600"
      >
        {{ $t('Home.button.post') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useBulletinBoard } from '@/composition/bulletinBoard.composition'
import { useReadStatus } from '@/composition/readStatus.composition'
import PaginationControl from '@/components/form/Pagination.vue'

const {
  paginatedPosts,
  currentPage,
  totalPages,
  loading,
  error,
  handleChangePage,
  goToDetail,
  goToCreatePost,
  fetchPost,
  formatDate
} = useBulletinBoard()

const { readStatus } = useReadStatus()

onMounted(async () => {
  await fetchPost()
})
</script>
