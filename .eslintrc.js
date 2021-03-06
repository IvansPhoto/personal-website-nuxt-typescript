module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 10,
        allowFirstLine: true
      },
      multiline: {
        max: 10,
        allowFirstLine: false
      }
    }]
  }
}
