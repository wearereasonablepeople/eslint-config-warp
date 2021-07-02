'use strict';

module.exports = {

  extends: ['plugin:react/recommended', 'standard-react'],

  plugins: ['react'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: {
    'jsx-quotes': [2, 'prefer-double'],
    'react/boolean-prop-naming': [0],
    'react/button-has-type': [0],
    'react/default-props-match-prop-types': [2],
    'react/destructuring-assignment': [0],
    'react/forbid-component-props': [0],
    'react/forbid-dom-props': [0],
    'react/forbid-elements': [0],
    'react/forbid-prop-types': [2],
    'react/function-component-definition': [2, {namedComponents: 'arrow-function'}],
    'react/jsx-boolean-value': [0],
    'react/jsx-child-element-spacing': [2],
    'react/jsx-closing-bracket-location': [2, 'line-aligned'],
    'react/jsx-closing-tag-location': [2],
    'react/jsx-curly-brace-presence': [2, {props: 'never', children: 'never'}],
    'react/jsx-curly-newline': [2],
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-equals-spacing': [0],
    'react/jsx-filename-extension': [0],
    'react/jsx-first-prop-new-line': [2],
    'react/jsx-fragments': [2, 'syntax'],
    'react/jsx-handler-names': [0],
    'react/jsx-indent': [2, 2, {checkAttributes: true, indentLogicalExpressions: true}],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-depth': [0],
    'react/jsx-max-props-per-line': [2],
    'react/jsx-newline': [2, {prevent: true}],
    'react/jsx-no-constructed-context-values': [2],
    'react/jsx-no-literals': [0],
    'react/jsx-no-script-url': [0],
    'react/jsx-no-useless-fragment': [2, {allowExpressions: true}],
    'react/jsx-one-expression-per-line': [2, {allow: 'literal'}],
    'react/jsx-pascal-case': [2],
    'react/jsx-props-no-multi-spaces': [2],
    'react/jsx-props-no-spreading': [0],
    'react/jsx-sort-default-props': [0],
    'react/jsx-sort-props': [0],
    'react/jsx-tag-spacing': [2, {beforeClosing: 'never'}],
    'react/jsx-wrap-multilines': [2, {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line'
    }],
    'react/no-access-state-in-setstate': [2],
    'react/no-adjacent-inline-elements': [0],
    'react/no-array-index-key': [2],
    'react/no-danger': [2],
    'react/no-did-mount-set-state': [2],
    'react/no-multi-comp': [2, {ignoreStateless: true}],
    'react/no-redundant-should-component-update': [2],
    'react/no-set-state': [0],
    'react/no-this-in-sfc': [2],
    'react/no-typos': [2],
    'react/no-unstable-nested-components': [2, {allowAsProps: true}],
    'react/no-unused-state': [2],
    'react/no-will-update-set-state': [2],
    'react/prefer-es6-class': [2],
    'react/prefer-read-only-props': [0],
    'react/prefer-stateless-function': [2],
    'react/require-default-props': [2, {forbidDefaultForRequired: true}],
    'react/require-optimization': [0],
    'react/self-closing-comp': [2],
    'react/sort-comp': [0],
    'react/sort-prop-types': [0],
    'react/state-in-constructor': [2],
    'react/static-property-placement': [0],
    'react/style-prop-object': [2],
    'react/void-dom-elements-no-children': [2]
  }

};
