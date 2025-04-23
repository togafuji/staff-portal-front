export interface Chat {
  id: number
  title: string
  createdBy: number
  participants: number[]
}

export interface Message {
  id: number
  chatId: number
  userId: number
  content: string
  createdAt: string
  read: boolean
}
