// jest.config.cjs
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  testMatch: ['**/__tests__/**/*.spec.[jt]s?(x)'],
  collectCoverage: true,
  coverageReporters: ['html', 'text-summary'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}
