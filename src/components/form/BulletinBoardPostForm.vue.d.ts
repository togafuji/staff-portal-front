declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    isEdit: {
        type: BooleanConstructor;
        default: boolean;
    };
    postId: {
        type: NumberConstructor;
        required: false;
    };
    initialData: {
        type: ObjectConstructor;
        required: false;
        default: () => {
            title: string;
            content: string;
        };
    };
    allowFileChange: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    formData: import("vue").Ref<{
        title: any;
        content: any;
    }, {
        title: any;
        content: any;
    } | {
        title: any;
        content: any;
    }>;
    files: import("vue").Ref<never[], never[]>;
    isPreviewVisible: import("vue").Ref<boolean, boolean>;
    errorMessages: import("vue").ComputedRef<string[] | (string & any[])>;
    onFileChange: (event: any) => void;
    submitPost: (submittedData: any) => Promise<void>;
    goBack: () => void;
    openPreview: () => void;
    closePreview: () => void;
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
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    isEdit: {
        type: BooleanConstructor;
        default: boolean;
    };
    postId: {
        type: NumberConstructor;
        required: false;
    };
    initialData: {
        type: ObjectConstructor;
        required: false;
        default: () => {
            title: string;
            content: string;
        };
    };
    allowFileChange: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    isEdit: boolean;
    initialData: Record<string, any>;
    allowFileChange: boolean;
}, {}, {
    PostButton: import("vue").DefineComponent<{}, {}, {}>;
    AttachmentPreview: import("vue").DefineComponent<{}, {}, {}>;
    BulletinBoardForm: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        modelValue: {
            type: () => Partial<import("../../entity/bulletinBoard.entity.js").FormData>;
            required: false;
            default: () => {
                title: string;
                content: string;
            };
        };
        isReadOnly: {
            type: BooleanConstructor;
            default: boolean;
        };
        isEdit: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, {
        formData: {
            title: string;
            content: string;
            files?: {
                readonly lastModified: number;
                readonly name: string;
                readonly webkitRelativePath: string;
                readonly size: number;
                readonly type: string;
                arrayBuffer: () => Promise<ArrayBuffer>;
                slice: (start?: number, end?: number, contentType?: string) => Blob;
                stream: () => ReadableStream<Uint8Array>;
                text: () => Promise<string>;
            }[] | undefined;
        };
        handleSubmit: () => void;
        handleFileChange: (event: Event) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "submit")[], "update:modelValue" | "submit", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: () => Partial<import("../../entity/bulletinBoard.entity.js").FormData>;
            required: false;
            default: () => {
                title: string;
                content: string;
            };
        };
        isReadOnly: {
            type: BooleanConstructor;
            default: boolean;
        };
        isEdit: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onSubmit?: ((...args: any[]) => any) | undefined;
    }>, {
        modelValue: Partial<import("../../entity/bulletinBoard.entity.js").FormData>;
        isReadOnly: boolean;
        isEdit: boolean;
    }, {}, {
        PostButton: import("vue").DefineComponent<{}, {}, {}>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    PreviewModal: import("vue").DefineComponent<{}, {}, {}>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
