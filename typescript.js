'use strict';

var index = require('./index');

// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/README.md#extension-rules
var extensionRules = [
  'brace-style',
  'comma-dangle',
  'comma-spacing',
  'default-param-last',
  'dot-notation',
  'func-call-spacing',
  'indent',
  'init-declarations',
  'keyword-spacing',
  'lines-between-class-members',
  'no-array-constructor',
  'no-dupe-class-members',
  'no-duplicate-imports',
  'no-empty-function',
  'no-extra-parens',
  'no-extra-semi',
  'no-implied-eval',
  'no-invalid-this',
  'no-loop-func',
  'no-loss-of-precision',
  'no-magic-numbers',
  'no-redeclare',
  'no-shadow',
  'no-throw-literal',
  'no-unused-expressions',
  'no-unused-vars',
  'no-use-before-define',
  'no-useless-constructor',
  'object-curly-spacing',
  'quotes',
  'require-await',
  'return-await',
  'semi',
  'space-before-function-paren',
  'space-infix-ops',
];

var extendedRules = Object.fromEntries(
  extensionRules
  .filter(function(name){ return index.rules.hasOwnProperty(name); })
  .flatMap(function(name) {
    return [
      [name, ['off']],
      ['@typescript-eslint/' + name, index.rules[name]]
    ];
  })
);

module.exports = {

  extends: ['./index.js', 'plugin:@typescript-eslint/recommended'],

  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint'],

  rules: extendedRules,

};
