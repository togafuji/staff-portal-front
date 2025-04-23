import { ref } from 'vue';
import { useReadStatusStore } from '@/stores/readStatus.store';

export const useReadStatus = () => {
  const readStatusStore = useReadStatusStore();
  const readStatus = ref<Record<number, boolean>>({});

  const fetchReadStatus = async (userId: number, postId: number): Promise<{ is_read: boolean }> => {
    const status = await readStatusStore.fetchReadStatus(userId, postId);
    readStatus.value[postId] = status.is_read;
    return status;
  };

  const markAsRead = async (userId: number, postId: number) => {
    await readStatusStore.markAsRead(userId, postId);
    readStatus.value[postId] = true;
  };

  return {
    readStatus,
    fetchReadStatus,
    markAsRead
  };
};
