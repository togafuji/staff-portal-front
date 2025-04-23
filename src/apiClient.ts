import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
  AxiosHeaders // ← 追加：ヘッダーの型 & クラス
} from 'axios'

/* ======================== *
 *  Axios インスタンス生成   *
 * ======================== */
const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3010/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

/* ======================== *
 *    リクエスト共通処理     *
 * ======================== */
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = localStorage.getItem('token')
    if (!token) return config

    /* -- AxiosHeaders に安全にセット -- */
    /*
     * 1. 既に AxiosHeaders ならそのまま .set()
     * 2. プレーンオブジェクトなら新しい AxiosHeaders に包み直す
     */
    if (config.headers instanceof AxiosHeaders) {
      config.headers.set('Authorization', `Bearer ${token}`)
    } else {
      // オブジェクト → AxiosHeaders へ昇格
      const h = new AxiosHeaders(config.headers || {})
      h.set('Authorization', `Bearer ${token}`)
      config.headers = h
    }

    return config
  },

  /* noImplicitAny 対応：unknown で受け取り型を明示 */
  (error: unknown) => Promise.reject(error)
)

export default apiClient
