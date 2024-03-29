# WARP ESLint Configuration

> `npm install --save-dev eslint eslint-config-warp`

## Usage

Create a `.eslintrc.json` file in the project root containing the following:

**Default usage**

```json
{
  "extends": ["warp"]
}
```

Always [configure your environment](http://eslint.org/docs/user-guide/configuring#specifying-environments).
We recommend doing so by using the appropriate [preset](#presets):

## Presets

This package comes with some additional presets to include in your eslint
configuration. To include any of them, just add them to the `extends` Array.
Note that order is important, because each preset overrides the previous. To
allow you to configure a working load order, the table below provides hints.

Preset | Description | Load Order | Dependencies
-------|-------------|------------|--------------
`warp` | Base JavaScript (ES5) linting rules | First |
`warp/node` | Linting rules for Node.JS | Soon after `warp` | `eslint-plugin-node`
`warp/es6` | Linting rules for ES6 language features | Soon after `warp` |
`warp/jsx` | Linting rules for React JSX | Soon after `warp` | `eslint-plugin-react eslint-plugin-react-hooks`
`warp/module` | Linting rules for modular JavaScript | Near the end | `eslint-plugin-import`
`warp/typescript` | Linting rules for TypeScript files; implies `warp/module` | Near the end | `eslint-plugin-import @typescript-eslint/eslint-plugin @typescript-eslint/parser`

## Example

To set up your ESLint for linting TypeScript modules for Node.JS:

```json
{
  "extends": ["warp", "warp/node", "warp/typescript"],
  "parserOptions": {
    "project": "YOUR.tsconfig.json"
  }
}
```
