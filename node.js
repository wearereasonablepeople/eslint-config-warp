'use strict';

module.exports = {

  plugins: ['node'],

  parserOptions: {
    sourceType: 'script'
  },

  env: {
    node: true
  },

  rules: {
    // Best practices
    'node/global-require': [2],
    'node/handle-callback-err': [2],
    'node/no-deprecated-api': [2],
    'node/no-exports-assign': [2],
    'node/no-extraneous-require': [2],
    'node/no-missing-require': [2],
    'node/no-mixed-requires': [2],
    'node/no-new-require': [2],
    'node/no-path-concat': [2],
    'node/no-process-env': [2],
    'node/no-process-exit': [2],
    'node/no-sync': [2],
    'node/no-unsupported-features/es-builtins': [2],
    'node/no-unsupported-features/es-syntax': [2],
    'node/no-unsupported-features/node-builtins': [2],
    'node/prefer-global/buffer': [2, 'always'],
    'node/prefer-global/console': [2, 'always'],
    'node/prefer-global/process': [2, 'always'],
    'node/prefer-global/text-decoder': [2, 'always'],
    'node/prefer-global/text-encoder': [2, 'always'],
    'node/prefer-global/url-search-params': [2, 'always'],
    'node/prefer-global/url': [2, 'always'],
    'node/prefer-promises/dns': [2],
    'node/prefer-promises/fs': [2],
    'node/process-exit-as-throw': [1],

    // Only needed for npm modules, not node in general
    'node/no-unpublished-bin': [0],
    'node/no-unpublished-import': [0],
    'node/no-unpublished-require': [0],
    'node/shebang': [0],

    // Handled in the 'module' preset
    'node/file-extension-in-import': [0],
    'node/no-extraneous-import': [0],
    'node/no-missing-import': [0],

    // Unused rules
    'node/callback-return': [0],
    'node/exports-style': [0],
    'node/no-callback-literal': [0],
    'node/no-restricted-import': [0],
    'node/no-restricted-require': [0],
  },

};
