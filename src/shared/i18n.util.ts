// src/i18n.js
import { createI18n } from 'vue-i18n'
import jaLabels from '@/assets/i18n/shared/label.ja.yaml' // YAML ファイルをインポート

// 翻訳データを定義
const messages = {
  en: {
    welcome: 'Welcome to my Vue app',
    message: 'This is a sample message'
  },
  ja: {
    welcome: '私の Vue アプリへようこそ',
    message: 'これはサンプルメッセージです',
    ...jaLabels // YAMLファイルのデータをマージ
  }
}

// i18n インスタンスの作成
const i18n = createI18n({
  locale: 'ja', // デフォルトの言語を日本語に設定
  fallbackLocale: 'en', // フォールバックの言語を英語に設定
  messages
})

export default i18n
