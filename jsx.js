module.exports = {

  extends: ['./index', 'standard-react'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: {
    'jsx-quotes': [2, 'prefer-double']
  }

}
