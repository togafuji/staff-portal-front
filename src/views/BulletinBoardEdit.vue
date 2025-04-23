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

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import BulletinBoardPostForm from '@/components/form/BulletinBoardPostForm.vue';
import { useBulletinBoardStore } from '@/stores/bulletinBoard.store';

const route = useRoute();
const router = useRouter();
const bulletinBoardStore = useBulletinBoardStore();

const postId = ref<number | null>(null);
const postDetail = ref<{ title: string; content: string } | null>(null);
const loading = ref(true);

onMounted(async () => {
  postId.value = Number(route.params.id);
  if (postId.value) {
    try {
      await bulletinBoardStore.fetchPostDetail(postId.value);
      postDetail.value = bulletinBoardStore.postDetail;
    } catch (error) {
      console.error('Failed to fetch post detail:', error);
      router.push('/error');
    } finally {
      loading.value = false;
    }
  } else {
    router.push('/error');
  }
});
</script>

