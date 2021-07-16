'use strict';

module.exports = {

  extends: ['plugin:import/errors'],

  plugins: ['import'],

  parserOptions: {
    sourceType: 'module',
  },

  rules: {
    'func-name-matching': [2, {includeCommonJSModuleExports: true}],

    // Errors
    'import/no-absolute-path': [2],
    'import/no-cycle': [2],
    'import/no-duplicates': [2],
    'import/no-self-import': [2],

    // Best practices
    'import/export': [2],
    'import/no-amd': [2],
    'import/no-anonymous-default-export': [2],
    'import/no-commonjs': [2],
    'import/no-extraneous-dependencies': [2],
    'import/no-import-module-exports': [2],
    'import/no-mutable-exports': [2],
    'import/no-named-as-default': [2],
    'import/no-unused-modules': [2],
    'import/no-useless-path-segments': [2],
    'import/no-webpack-loader-syntax': [2],

    // Style guide
    'import/extensions': [2, 'ignorePackages'],
    'import/first': [2],
    'import/newline-after-import': [2],
    'import/no-default-export': [2],
    'import/no-unassigned-import': [2],
    'import/order': [2, {
      groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object'],
      alphabetize: {order: 'asc'},
    }],

    // Unused rules
    'import/dynamic-import-chunkname': [0],
    'import/exports-last': [0],
    'import/group-exports': [0],
    'import/max-dependencies': [0],
    'import/no-deprecated': [0],
    'import/no-dynamic-require': [0],
    'import/no-internal-modules': [0],
    'import/no-named-as-default-member': [0],
    'import/no-named-default': [0],
    'import/no-named-export': [0],
    'import/no-namespace': [0],
    'import/no-nodejs-modules': [0],
    'import/no-relative-packages': [0],
    'import/no-relative-parent-imports': [0],
    'import/no-restricted-paths': [0],
    'import/prefer-default-export': [0],
  },

};
