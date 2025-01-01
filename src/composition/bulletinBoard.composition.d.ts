export declare function useBulletinBoard(): {
    paginatedPosts: import("vue").ComputedRef<{
        id: number;
        title: string;
        content: string;
        userId: number;
        userName: string;
        userIconUrl: string;
        files?: {
            id: number;
            fileName: string;
            fileUrl: string;
        }[] | undefined;
        createdAt: string;
        updatedAt: string;
        isRead: boolean;
    }[]>;
    currentPage: import("vue").ComputedRef<number>;
    totalPages: import("vue").ComputedRef<number>;
    loading: import("vue").ComputedRef<boolean>;
    error: import("vue").ComputedRef<string | null>;
    handleChangePage: (page: number) => void;
    goToDetail: (id: number) => void;
    goToCreatePost: () => void;
    formatDate: (dateString: string) => string;
    fetchPosts: () => Promise<void>;
    fetchPostDetail: (id: number) => Promise<void>;
    markAsRead: (id: number) => Promise<void>;
};
