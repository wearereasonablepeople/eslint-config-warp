'use strict';

module.exports = {

  parserOptions: {
    ecmaVersion: 2018,
  },

  env: {
    es6: true,
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
    'prefer-numeric-literals': [2],
    'prefer-rest-params': [2],
    'prefer-template': [2],
    'quotes': [2, 'single', {avoidEscape: true, allowTemplateLiterals: true}],
    'symbol-description': [2],
    'arrow-spacing': [2, {before: true, after: true}],
    'rest-spread-spacing': [2, 'never'],
    'template-curly-spacing': [2, 'never'],
    'no-return-await': [2],
    'require-await': [2],
    'no-await-in-loop': [2],
    'prefer-promise-reject-errors': [2],
    'prefer-exponentiation-operator': [2],
    'prefer-named-capture-group': [2],
    'prefer-object-spread': [2],
    'prefer-spread': [2],
    'template-tag-spacing': [2, 'always'],
    'yield-star-spacing': [2, 'both'],
  },

};
