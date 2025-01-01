export interface Attachment {
  id: number
  fileName: string
  fileUrl: string
}

export interface BulletinBoardFile {
  id: number
  fileName: string
  fileUrl: string
}

export interface BulletinBoardItem {
  id: number
  title: string
  content: string
  userId: number
  userName: string
  userIconUrl: string
  files?: BulletinBoardFile[]
  createdAt: string
  updatedAt: string
  isRead: boolean
}

export interface CreateBulletinBoardPayload {
  title: string
  content: string
  files: File[]
}

export interface UpdateBulletinBoardPayload {
  title: string
  content: string
}

export interface FormData {
  title: string
  content: string
  files?: File[]
}

export interface BulletinBoardFormProps {
  modelValue: FormData
  isReadOnly: boolean
  isEdit: boolean
}

export interface BulletinBoardFormEmits {
  (event: 'update:modelValue', payload: FormData): void
  (event: 'submit', payload: FormData): void
}

export interface BulletinBoardPostFormProps {
  isEdit: boolean
  postId?: number
  initialData?: {
    title: string
    content: string
  }
  allowFileChange?: boolean
}
