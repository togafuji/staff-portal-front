import axios from '@/axios'

export const fetchReadStatus = async (userId: number, bulletinBoardId: number) => {
  const response = await axios.get(`/bulletin_boards/${bulletinBoardId}//read_status`, {
    params: { user_id: userId }
  })
  return response.data
}

export const markAsRead = async (userId: number, bulletinBoardId: number) => {
  await axios.post(`/bulletin_boards/${bulletinBoardId}/mark_as_read`, { user_id: userId })
}
