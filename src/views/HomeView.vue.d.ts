declare const _default: import("vue").DefineComponent<{}, {
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
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
    PaginationControl: import("vue").DefineComponent<{}, {}, {}>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
