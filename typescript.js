'use strict';

var index = require('./index');

// https://typescript-eslint.io/rules/adjacent-overload-signatures/
var extensionRules = [
  'block-spacing',
  'brace-style',
  'class-methods-use-this',
  'comma-dangle',
  'comma-spacing',
  'default-param-last',
  'dot-notation',
  'func-call-spacing',
  'indent',
  'init-declarations',
  'keyword-spacing',
  'lines-around-comment',
  'lines-between-class-members',
  'no-array-constructor',
  'no-dupe-class-members',
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
  'semi',
  'space-before-blocks',
  'space-before-function-paren',
  'space-infix-ops',
  'key-spacing',
];

var has = Object.prototype.hasOwnProperty;

var clone = function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
};

var extendedRules = Object.fromEntries(
  extensionRules
  .filter(function pred(name) { return has.call(index.rules, name); })
  .flatMap(function transform(name) {
    return [
      [name, [0]],
      ['@typescript-eslint/' + name, clone(index.rules[name])],
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
      '@typescript-eslint/no-useless-empty-export': [2],
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
      '@typescript-eslint/no-duplicate-enum-values': [2],
      '@typescript-eslint/no-unsafe-declaration-merging': [2],
      '@typescript-eslint/no-duplicate-type-constituents': [2],
      '@typescript-eslint/no-import-type-side-effects': [2],
      '@typescript-eslint/no-mixed-enums': [2],
      '@typescript-eslint/no-unsafe-enum-comparison': [2],

      // Code quality
      '@typescript-eslint/ban-tslint-comment': [2],
      '@typescript-eslint/method-signature-style': [2],
      '@typescript-eslint/no-invalid-void-type': [2],
      '@typescript-eslint/no-meaningless-void-operator': [2],
      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': [2],
      '@typescript-eslint/no-redundant-type-constituents': [2],
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
      '@typescript-eslint/sort-type-constituents': [2],

      // Stylistic preferences
      '@typescript-eslint/type-annotation-spacing': [2],
      '@typescript-eslint/adjacent-overload-signatures': [2],
      '@typescript-eslint/no-inferrable-types': [2],
      '@typescript-eslint/consistent-type-definitions': [2, 'type'],
      '@typescript-eslint/member-delimiter-style': [2, {
        multiline: {delimiter: 'comma', requireLast: false},
        singleline: {delimiter: 'comma', requireLast: false},
        multilineDetection: 'brackets',
      }],

      // Unused rules
      '@typescript-eslint/array-type': [0],
      '@typescript-eslint/class-literal-property-style': [0],
      '@typescript-eslint/consistent-indexed-object-style': [0],
      '@typescript-eslint/consistent-type-exports': [0],
      '@typescript-eslint/consistent-type-imports': [0],
      '@typescript-eslint/explicit-function-return-type': [0],
      '@typescript-eslint/explicit-member-accessibility': [0],
      '@typescript-eslint/explicit-module-boundary-types': [0],
      '@typescript-eslint/member-ordering': [0],
      '@typescript-eslint/naming-convention': [0],
      '@typescript-eslint/no-redeclare': [0],
      '@typescript-eslint/no-unsafe-argument': [0],
      '@typescript-eslint/no-unsafe-assignment': [0],
      '@typescript-eslint/no-unsafe-call': [0],
      '@typescript-eslint/no-unsafe-member-access': [0],
      '@typescript-eslint/no-unsafe-return': [0],
      '@typescript-eslint/prefer-enum-initializers': [0],
      '@typescript-eslint/prefer-for-of': [0],
      '@typescript-eslint/prefer-readonly': [0],
      '@typescript-eslint/prefer-readonly-parameter-types': [0],
      '@typescript-eslint/prefer-regexp-exec': [0],
      '@typescript-eslint/promise-function-async': [0],
      '@typescript-eslint/return-await': [0],
      '@typescript-eslint/typedef': [0],
      '@typescript-eslint/consistent-generic-constructors': [0],
      '@typescript-eslint/parameter-properties': [0],
      '@typescript-eslint/no-empty-interface': [0],
      '@typescript-eslint/no-non-null-assertion': [0],
      '@typescript-eslint/prefer-namespace-keyword': [0],

      // Overrides
      'import/extensions': [2, 'never'],
      'import/namespace': [0],
      'node/no-unsupported-features/es-syntax': [0],
      'new-parens': [0],

      // Base rules that are not needed in TypeScript thanks to static guarantees.
      'consistent-return': [0],
      'default-case': [0],
      'eqeqeq': [0],
      'no-eq-null': [0],
    }
  ),

};
