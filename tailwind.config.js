module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        'sunset-orange': {
          DEFAULT: '#F84848',
          '50': '#FFF9F9',
          '100': '#FEE5E5',
          '200': '#FDBEBE',
          '300': '#FB9797',
          '400': '#FA6F6F',
          '500': '#F84848',
          '600': '#F61212',
          '700': '#C80808',
          '800': '#920606',
          '900': '#5C0404'
        },
      },
    },
  },
  plugins: []
}
