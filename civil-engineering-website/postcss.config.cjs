module.exports = {
  plugins: {
    '@tailwindcss/postcss': {
      config: './tailwind.config.cjs' // or './tailwind.config.js'
    },
    autoprefixer: {},
  }
}