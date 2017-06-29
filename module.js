'use strict';

module.exports = {

  extends: './es6.js',

  parserOptions: {
    sourceType: 'module'
  },

  rules: {
    'func-name-matching': [2, {includeCommonJSModuleExports: true}]
  }

};
