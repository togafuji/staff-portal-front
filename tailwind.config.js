module.exports = {
  content: [
    './index.html', // HTMLファイルが含まれている場合
    './src/**/*.{html,js,vue,ts}' // Vue、JS、TSファイルが含まれている場合
  ],
  theme: {
    extend: {
      letterSpacing: {
        wider: '0.1em',
        widest: '0.2em'
      }
    }
  },
  plugins: []
}
