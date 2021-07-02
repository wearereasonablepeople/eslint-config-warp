'use strict';

var presets = [
  'index',
  'node',
  'es6',
  'jsx',
  'module',
  'typescript',
];

module.exports = {
  extends: presets.map(function(preset) {
    return '../' + preset + '.js';
  }),
};
