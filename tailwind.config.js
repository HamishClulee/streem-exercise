module.exports = {
  purge: ['./index.html', './src/**/*.vue', './src/*.vue'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        body: ['"Open Sans"', 'sans-serif']
      },
      minHeight: {
        'article-page': '8rem'
      },
      colors: {
        'streem-pink': '#FF7675',
        'streem-dark-blue': '#131E5E',
        'streem-light-blue': '#2F54EB',
        white: '#fff',
        'util-500': '#BFBFBF'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
