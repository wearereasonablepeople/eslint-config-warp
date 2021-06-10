'use strict';

module.exports = {

  parserOptions: {
    sourceType: 'module'
  },

  rules: {
    'func-name-matching': [2, {includeCommonJSModuleExports: true}]
  }

};
