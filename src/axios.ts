import axios from 'axios'
// カスタム Axios インスタンスの作成
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3010/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json' // JSONレスポンスを期待
  }
})

// リクエストインターセプターで認証トークンを追加
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') // トークンの取得キーを確認
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
