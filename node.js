'use strict';

module.exports = {

  extends: ['./index.js'],

  plugins: ['node'],

  parserOptions: {
    sourceType: 'script'
  },

  env: {
    node: true
  },

  rules: {
    'node/no-sync': [1],
    'node/global-require': [2],
    'node/handle-callback-err': [2],
    'node/no-mixed-requires': [2],
    'node/no-new-require': [2],
    'node/no-path-concat': [2],
  }

};
