# WARP ESLint Configuration

> `npm install --save-dev eslint eslint-config-warp`

## Usage

Create a `.eslintrc.json` file in the project root containing the following:

**Default usage**

```json
{
  "extends": ["warp"],
  "env": {
    "browser": true
  }
}
```

Always [configure your environment](http://eslint.org/docs/user-guide/configuring#specifying-environments).

**Inside NodeJS** (`"env":{"node":true}` is implied)

```json
{
  "extends": ["warp/node"]
}
```

**With ES6 support** (`"env":{"es6":true}` is implied)

```json
{
  "extends": ["warp/es6"]
}
```

**Combining rulesets**

```json
{
  "extends": ["warp/node", "warp/es6"]
}
```

## Overrides

* You can use `.eslintignore` to ignore paths.
* You can override rules inside your `.eslintrc` file.
* You can use `/*eslint rule:0 */` comments to override specific rules per file.
* If you're confused: [RTFM](http://eslint.org/docs/user-guide/configuring).

## React JSX

```sh
npm install --save-dev eslint-config-standard-react
```

```json
{
  "extends": ["warp/jsx"]
}
```