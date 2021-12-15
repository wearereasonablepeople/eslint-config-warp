'use strict';

var index = require('./index');

// https://git.io/JcBuy
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
  'no-restricted-imports',
  'no-shadow',
  'no-throw-literal',
  'no-unused-expressions',
  'no-unused-vars',
  'no-use-before-define',
  'no-useless-constructor',
  'object-curly-spacing',
  'padding-line-between-statements',
  'quotes',
  'require-await',
  'return-await',
  'semi',
  'space-before-function-paren',
  'space-infix-ops',
];

var has = Object.prototype.hasOwnProperty;

var extendedRules = Object.fromEntries(
  extensionRules
  .filter(function pred(name) { return has.call(index.rules, name); })
  .flatMap(function transform(name) {
    return [
      [name, [0]],
      ['@typescript-eslint/' + name, index.rules[name]],
    ];
  })
);

module.exports = {

  extends: ['./module.js', 'plugin:import/typescript', 'plugin:@typescript-eslint/recommended'],

  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint'],

  rules: Object.assign(
    {},
    extendedRules,
    {

      // Best practices
      '@typescript-eslint/await-thenable': [2],
      '@typescript-eslint/consistent-type-assertions': [2],
      '@typescript-eslint/no-base-to-string': [2],
      '@typescript-eslint/no-confusing-non-null-assertion': [2],
      '@typescript-eslint/no-confusing-void-expression': [2, {
        ignoreArrowShorthand: true,
        ignoreVoidOperator: true,
      }],
      '@typescript-eslint/no-dynamic-delete': [2],
      '@typescript-eslint/no-extraneous-class': [2],
      '@typescript-eslint/no-floating-promises': [2],
      '@typescript-eslint/no-for-in-array': [2],
      '@typescript-eslint/no-misused-promises': [2],
      '@typescript-eslint/no-require-imports': [2],
      '@typescript-eslint/no-unsafe-argument': [2],
      '@typescript-eslint/no-unsafe-assignment': [2],
      '@typescript-eslint/no-unsafe-call': [2],
      '@typescript-eslint/no-unsafe-member-access': [2],
      '@typescript-eslint/no-unsafe-return': [2],
      '@typescript-eslint/prefer-includes': [2],
      '@typescript-eslint/prefer-literal-enum-member': [2],
      '@typescript-eslint/prefer-nullish-coalescing': [2],
      '@typescript-eslint/prefer-optional-chain': [2],
      '@typescript-eslint/prefer-reduce-type-parameter': [2],
      '@typescript-eslint/prefer-return-this-type': [2],
      '@typescript-eslint/prefer-string-starts-ends-with': [2],
      '@typescript-eslint/require-array-sort-compare': [2],
      '@typescript-eslint/restrict-plus-operands': [2],
      '@typescript-eslint/restrict-template-expressions': [
        2,
        {allowNumber: true, allowBoolean: true, allowAny: false, allowNullish: true},
      ],
      '@typescript-eslint/strict-boolean-expressions': [2],
      '@typescript-eslint/switch-exhaustiveness-check': [2],
      '@typescript-eslint/unbound-method': [2],
      '@typescript-eslint/no-duplicate-imports': [2],

      // Code quality
      '@typescript-eslint/ban-tslint-comment': [2],
      '@typescript-eslint/method-signature-style': [2],
      '@typescript-eslint/no-invalid-void-type': [2],
      '@typescript-eslint/no-meaningless-void-operator': [2],
      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': [2],
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': [2],
      '@typescript-eslint/no-unnecessary-condition': [2],
      '@typescript-eslint/no-unnecessary-qualifier': [2],
      '@typescript-eslint/no-unnecessary-type-arguments': [2],
      '@typescript-eslint/no-unnecessary-type-assertion': [2],
      '@typescript-eslint/no-unnecessary-type-constraint': [2],
      '@typescript-eslint/non-nullable-type-assertion-style': [2],
      '@typescript-eslint/prefer-function-type': [2],
      '@typescript-eslint/prefer-ts-expect-error': [2],
      '@typescript-eslint/unified-signatures': [2],

      // Stylistic preferences
      '@typescript-eslint/type-annotation-spacing': [2],

      // Unused rules
      '@typescript-eslint/array-type': [0],
      '@typescript-eslint/class-literal-property-style': [0],
      '@typescript-eslint/consistent-indexed-object-style': [0],
      '@typescript-eslint/consistent-type-definitions': [0],
      '@typescript-eslint/explicit-function-return-type': [0],
      '@typescript-eslint/explicit-member-accessibility': [0],
      '@typescript-eslint/member-delimiter-style': [0],
      '@typescript-eslint/member-ordering': [0],
      '@typescript-eslint/naming-convention': [0],
      '@typescript-eslint/no-implicit-any-catch': [0],
      '@typescript-eslint/no-parameter-properties': [0],
      '@typescript-eslint/no-type-alias': [0],
      '@typescript-eslint/prefer-enum-initializers': [0],
      '@typescript-eslint/prefer-for-of': [0],
      '@typescript-eslint/prefer-readonly': [0],
      '@typescript-eslint/prefer-readonly-parameter-types': [0],
      '@typescript-eslint/prefer-regexp-exec': [0],
      '@typescript-eslint/promise-function-async': [0],
      '@typescript-eslint/return-await': [0],
      '@typescript-eslint/sort-type-union-intersection-members': [0],
      '@typescript-eslint/typedef': [0],
      '@typescript-eslint/consistent-type-imports': [0],

      // Overrides
      'import/extensions': [2, 'never'],
      'import/namespace': [0],
      'node/no-unsupported-features/es-syntax': [0],
      '@typescript-eslint/explicit-module-boundary-types': [0],
    }
  ),

};
