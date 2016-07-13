module.exports = {

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },

  env: {
    es6: true
  },

  extends: 'eslint:recommended',

  rules: {

    //Warnings.
    'no-alert': [1],
    'no-console': [1],
    'no-warning-comments': [1, {terms: ['todo', 'tmp', 'temp', 'temporary', 'fixme']}],
    'no-sync': [1],

    //Best practices.
    'no-prototype-builtins': [2],
    'array-callback-return': [2],
    'complexity': [1, {max: 12}],
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
    'no-magic-numbers': [2, {ignore: [-1, 0, 1, 2], ignoreArrayIndexes: true}],
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
    'no-useless-call': [2],
    'no-useless-concat': [2],
    'no-useless-escape': [2],
    'no-with': [2],
    'radix': [2],
    'wrap-iife': [2],
    'yoda': [2, 'never'],
    'strict': [2],
    'no-catch-shadow': [2],
    'no-label-var': [2],
    'no-shadow-restricted-names': [2],
    'no-use-before-define': [2],
    'global-require': [2],
    'handle-callback-err': [2],
    'no-mixed-requires': [2],
    'no-new-require': [2],
    'no-path-concat': [2],
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

    //Stylistic preferences.
    'no-else-return': [],
    'arrow-spacing': [],
    'generator-star-spacing': [],
    'rest-spread-spacing': [],
    'template-curly-spacing': [],
    'yield-star-spacing': []

  }



}
