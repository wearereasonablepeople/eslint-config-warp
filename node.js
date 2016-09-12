module.exports = {

  extends: './index.js',

  parserOptions: {
    sourceType: 'script'
  },

  env: {
    node: true
  },

  rules: {
    'global-require': [2],
    'handle-callback-err': [2],
    'no-mixed-requires': [2],
    'no-new-require': [2],
    'no-path-concat': [2]
  }

}
