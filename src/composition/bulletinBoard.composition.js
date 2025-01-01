import { computed } from 'vue';
import { useBulletinBoardStore } from '@/stores/bulletinBoard.store';
import { useRouter } from 'vue-router';
import { BulletinBoardRepository } from '@/repositories/bulletinBoard.repository';
export function useBulletinBoard() {
    const store = useBulletinBoardStore();
    const router = useRouter();
    const paginatedPosts = computed(() => store.paginatedPosts);
    const totalPages = computed(() => store.totalPages);
    const fetchPosts = async () => {
        await store.fetchPosts();
    };
    const fetchPostDetail = async (id) => {
        await store.fetchPostDetail(id);
    };
    const handleChangePage = (page) => {
        if (page >= 1 && page <= totalPages.value) {
            store.currentPage = page;
        }
    };
    const goToDetail = (id) => {
        router.push(`/detail/${id}`);
    };
    const goToCreatePost = () => {
        router.push('/create');
    };
    const markAsRead = async (id) => {
        try {
            await BulletinBoardRepository.markAsRead(id);
            // ローカルストア更新
            const found = store.state.posts.find((p) => p.id === id);
            if (found)
                found.isRead = true;
        }
        catch (error) {
            console.error('Error marking post as read:', error);
        }
    };
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };
    return {
        paginatedPosts,
        currentPage: computed(() => store.currentPage),
        totalPages,
        loading: computed(() => store.state.loading),
        error: computed(() => store.state.error),
        handleChangePage,
        goToDetail,
        goToCreatePost,
        formatDate,
        fetchPosts,
        fetchPostDetail,
        markAsRead
    };
}
