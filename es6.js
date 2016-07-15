module.exports = {

  extends: './index.js',

  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },

  env: {
    es6: true
  },

  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'arrow-parens': [2, 'as-needed'],
    'constructor-super': [2],
    'no-duplicate-imports': [2],
    'no-useless-computed-key': [2],
    'no-useless-constructor': [2],
    'no-useless-rename': [2],
    'no-var': [2],
    'prefer-arrow-callback': [2],
    'prefer-const': [2],
    'prefer-rest-params': [2],
    'prefer-template': [2],
    'quotes': [2, {avoidEscape: true, allowTemplateLiterals: true}]
  }
}
