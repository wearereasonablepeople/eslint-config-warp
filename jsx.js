'use strict';

module.exports = {

  extends: ['plugin:react/recommended', 'standard-react'],

  plugins: ['react'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: {
    'jsx-quotes': [2, 'prefer-double']
  }

};
