import type { CreateBulletinBoardPayload } from '@/entity/bulletinBoard.entity';
export declare const useBulletinBoardStore: import("pinia").StoreDefinition<"bulletinBoard", Pick<{
    state: {
        posts: {
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
        }[];
        postDetail: {
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
        } | null;
        loading: boolean;
        error: string | null;
        currentPage: number;
        pageSize: number;
    };
    posts: import("vue").ComputedRef<{
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
    postDetail: import("vue").ComputedRef<{
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
    } | null>;
    currentPage: import("vue").WritableComputedRef<number, number>;
    pageSize: import("vue").ComputedRef<number>;
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
    totalPages: import("vue").ComputedRef<number>;
    fetchPosts: () => Promise<void>;
    fetchPostDetail: (id: number) => Promise<void>;
    createBulletin: (payload: CreateBulletinBoardPayload) => Promise<void>;
    updatePost: (id: number, payload: CreateBulletinBoardPayload) => Promise<void>;
    deletePost: (id: number) => Promise<void>;
}, "state">, Pick<{
    state: {
        posts: {
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
        }[];
        postDetail: {
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
        } | null;
        loading: boolean;
        error: string | null;
        currentPage: number;
        pageSize: number;
    };
    posts: import("vue").ComputedRef<{
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
    postDetail: import("vue").ComputedRef<{
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
    } | null>;
    currentPage: import("vue").WritableComputedRef<number, number>;
    pageSize: import("vue").ComputedRef<number>;
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
    totalPages: import("vue").ComputedRef<number>;
    fetchPosts: () => Promise<void>;
    fetchPostDetail: (id: number) => Promise<void>;
    createBulletin: (payload: CreateBulletinBoardPayload) => Promise<void>;
    updatePost: (id: number, payload: CreateBulletinBoardPayload) => Promise<void>;
    deletePost: (id: number) => Promise<void>;
}, "posts" | "postDetail" | "currentPage" | "pageSize" | "paginatedPosts" | "totalPages">, Pick<{
    state: {
        posts: {
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
        }[];
        postDetail: {
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
        } | null;
        loading: boolean;
        error: string | null;
        currentPage: number;
        pageSize: number;
    };
    posts: import("vue").ComputedRef<{
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
    postDetail: import("vue").ComputedRef<{
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
    } | null>;
    currentPage: import("vue").WritableComputedRef<number, number>;
    pageSize: import("vue").ComputedRef<number>;
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
    totalPages: import("vue").ComputedRef<number>;
    fetchPosts: () => Promise<void>;
    fetchPostDetail: (id: number) => Promise<void>;
    createBulletin: (payload: CreateBulletinBoardPayload) => Promise<void>;
    updatePost: (id: number, payload: CreateBulletinBoardPayload) => Promise<void>;
    deletePost: (id: number) => Promise<void>;
}, "fetchPosts" | "fetchPostDetail" | "createBulletin" | "updatePost" | "deletePost">>;
