module.exports = {

  extends: ['./index.js', 'standard-react'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: {
    'jsx-quotes': [2, 'prefer-double']
  }

}
