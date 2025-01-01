export default {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest', // Vueファイル用のトランスフォーマ
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'babel-jest' // JavaScript/TypeScript用
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'ts', 'tsx'], // サポートする拡張子
  testMatch: ['**/__tests__/**/*.spec.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  collectCoverage: true,
  coverageReporters: ['html', 'text-summary'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy' // CSSモック
  },
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  }
}
