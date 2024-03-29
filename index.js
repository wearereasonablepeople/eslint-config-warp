'use strict';

module.exports = {

  extends: 'eslint:recommended',

  rules: {

    // Warnings.
    'no-warning-comments': [1, {terms: ['todo', 'tmp', 'temp', 'temporary', 'fixme']}],

    // Best practices.
    'no-alert': [2],
    'no-console': [2],
    'no-prototype-builtins': [2],
    'array-callback-return': [2],
    'consistent-return': [2],
    'curly': [2],
    'default-case': [2],
    'dot-location': [2, 'property'],
    'dot-notation': [2],
    'eqeqeq': [2, 'always'],
    'no-caller': [2],
    'no-eq-null': [2],
    'no-eval': [2],
    'no-extend-native': [2],
    'no-extra-label': [2],
    'no-floating-decimal': [2],
    'no-implicit-coercion': [2],
    'no-implied-eval': [2],
    'no-iterator': [2],
    'no-lone-blocks': [2],
    'no-multi-spaces': [2],
    'no-multi-str': [2],
    'no-new-func': [2],
    'no-octal-escape': [2],
    'no-param-reassign': [2],
    'no-proto': [2],
    'no-self-compare': [2],
    'no-sequences': [2],
    'no-throw-literal': [2],
    'no-unmodified-loop-condition': [2],
    'no-unused-expressions': [2, {allowShortCircuit: true, allowTernary: true}],
    'no-unused-vars': [2, {argsIgnorePattern: '^_$'}],
    'no-unused-private-class-members': [2],
    'no-useless-call': [2],
    'no-useless-concat': [2],
    'no-useless-escape': [2],
    'no-with': [2],
    'radix': [2],
    'wrap-iife': [2],
    'yoda': [2, 'never'],
    'strict': [2],
    'no-label-var': [2],
    'no-shadow-restricted-names': [2],
    'no-use-before-define': [2],
    'func-name-matching': [2],
    'no-useless-return': [2],
    'nonblock-statement-body-position': [2, 'beside'],
    'for-direction': [2],
    'consistent-this': [2, 'self'],
    'eol-last': [2],
    'func-style': [2],
    'class-methods-use-this': [2],
    'linebreak-style': [2],
    'max-len': [2, {code: 100}],
    'max-statements-per-line': [2, {max: 2}],
    'no-else-return': [2],
    'no-array-constructor': [2],
    'no-lonely-if': [2],
    'no-multiple-empty-lines': [2, {max: 1}],
    'no-new-object': [2],
    'no-trailing-spaces': [2],
    'no-unneeded-ternary': [2],
    'quote-props': [2, 'consistent-as-needed'],
    'quotes': [2, 'single', {avoidEscape: true, allowTemplateLiterals: false}],
    'unicode-bom': [2, 'never'],
    'max-depth': [1, {max: 5}],
    'max-nested-callbacks': [1, {max: 5}],
    'complexity': [1, {max: 12}],
    'max-params': [1, {max: 5}],
    'max-lines-per-function': [1, {max: 100}],
    'max-statements': [1, {max: 20}],
    'guard-for-in': [2],
    'no-loss-of-precision': [2],
    'no-return-assign': [2],
    'accessor-pairs': [2],
    'default-param-last': [2],
    'init-declarations': [2, 'always'],
    'no-bitwise': [2],
    'no-constructor-return': [2],
    'no-extra-bind': [2],
    'no-implicit-globals': [2],
    'no-invalid-this': [2],
    'no-labels': [2],
    'no-mixed-operators': [2],
    'no-multi-assign': [2],
    'no-new': [2],
    'no-new-wrappers': [2],
    'no-nonoctal-decimal-escape': [2],
    'no-plusplus': [2, {allowForLoopAfterthoughts: true}],
    'no-promise-executor-return': [2],
    'no-shadow': [2],
    'no-template-curly-in-string': [2],
    'no-unreachable-loop': [2],
    'no-unsafe-optional-chaining': [2],
    'no-useless-backreference': [2],
    'require-unicode-regexp': [2],
    'no-useless-constructor': [2],
    'no-dupe-class-members': [2],
    'no-redeclare': [2],
    'require-await': [2],
    'max-lines': [1, 400],

    // Stylistic preferences.
    'indent': [2, 2, {MemberExpression: 0, SwitchCase: 1}],
    'new-cap': [2, {newIsCap: true, capIsNew: false}],
    'line-comment-position': [2, {position: 'above'}],
    'func-call-spacing': [2, 'never'],
    'array-bracket-spacing': [2, 'never'],
    'no-whitespace-before-property': [2],
    'object-curly-spacing': [2, 'never'],
    'semi': [2, 'always'],
    'semi-spacing': [2, {before: false, after: true}],
    'space-before-blocks': [2, 'always'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': [2],
    'space-unary-ops': [2, {words: true, nonwords: false}],
    'camelcase': [2, {properties: 'always'}],
    'comma-spacing': [2, {before: false, after: true}],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'key-spacing': [2, {beforeColon: false, afterColon: true, mode: 'minimum'}],
    'brace-style': [2, '1tbs', {allowSingleLine: true}],
    'switch-colon-spacing': [2, {after: true, before: false}],
    'semi-style': [2, 'last'],
    'array-bracket-newline': [2, 'consistent'],
    'array-element-newline': [2, 'consistent'],
    'block-spacing': [2, 'always'],
    'capitalized-comments': [2, 'always', {
      ignoreConsecutiveComments: true,
      ignoreInlineComments: true,
    }],
    'comma-dangle': [2, {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'default-case-last': [2],
    'function-call-argument-newline': [2, 'consistent'],
    'function-paren-newline': [2, 'consistent'],
    'generator-star-spacing': [2, 'before'],
    'implicit-arrow-linebreak': [2, 'beside'],
    'keyword-spacing': [2, {before: true, after: true}],
    'lines-around-comment': [2, {
      beforeBlockComment: true,
      beforeLineComment: true,
      allowBlockStart: true,
      allowBlockEnd: false,
      allowClassStart: true,
      allowClassEnd: false,
      allowObjectStart: true,
      allowObjectEnd: false,
      allowArrayStart: true,
      allowArrayEnd: false,
    }],
    'lines-between-class-members': [2, 'always'],
    'multiline-comment-style': [2, 'separate-lines'],
    'new-parens': [2, 'never'],
    'newline-per-chained-call': [2, {ignoreChainWithDepth: 3}],
    'no-inline-comments': [2],
    'grouped-accessor-pairs': [2],
    'no-tabs': [2],
    'object-curly-newline': [2, {consistent: true, minProperties: 0}],
    'object-shorthand': [2, 'consistent-as-needed'],
    'one-var': [2, 'never'],
    'operator-assignment': [2, 'never'],
    'padded-blocks': [2, 'never'],
    'prefer-regex-literals': [2],
    'prefer-object-has-own': [2],
    'space-before-function-paren': [2, 'never'],
    'spaced-comment': [2, 'always'],
    'no-extra-semi': [2],

    // Unused rules.
    'block-scoped-var': [0],
    'id-denylist': [0],
    'id-length': [0],
    'id-match': [0],
    'max-classes-per-file': [0],
    'multiline-ternary': [0],
    'no-confusing-arrow': [0],
    'no-continue': [0],
    'no-div-regex': [0],
    'no-extra-parens': [0],
    'no-loop-func': [0],
    'no-negated-condition': [0],
    'no-nested-ternary': [0],
    'no-restricted-exports': [0],
    'no-restricted-globals': [0],
    'no-restricted-imports': [0],
    'no-restricted-properties': [0],
    'no-restricted-syntax': [0],
    'no-script-url': [0],
    'no-ternary': [0],
    'no-undef-init': [0],
    'no-undefined': [0],
    'no-underscore-dangle': [0],
    'no-void': [0],
    'object-property-newline': [0],
    'one-var-declaration-per-line': [0],
    'operator-linebreak': [0],
    'padding-line-between-statements': [0],
    'prefer-destructuring': [0],
    'require-atomic-updates': [0],
    'sort-keys': [0],
    'sort-vars': [0],
    'wrap-regex': [0],
    'vars-on-top': [0],
    'no-magic-numbers': [0],
    'func-names': [0],
    'no-empty-function': [0],

    // Handled by the 'module' preset.
    'sort-imports': [0],
  },

};
