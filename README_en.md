# babel-preset-vue2

> Babel preset for vue@2.x

<p align="center">
    <a href="https://www.npmjs.com/package/babel-preset-vue2"><img src="https://img.shields.io/npm/v/babel-preset-vue2.svg" alt="Version"></a>
    <a href="https://npmcharts.com/compare/babel-preset-vue2?minimal=true"><img src="https://img.shields.io/npm/dm/babel-preset-vue2.svg" alt="Downloads"></a>
    <a href="https://github.com/HaoChuan9421/babel-preset-vue2/commits/master"><img src="https://img.shields.io/github/last-commit/haochuan9421/babel-preset-vue2.svg" alt="Commit"></a>
    <a href="https://github.com/HaoChuan9421/babel-preset-vue2/issues"><img src="https://img.shields.io/github/issues-closed/haochuan9421/babel-preset-vue2.svg" alt="Issues"></a>
    <a href="https://github.com/HaoChuan9421/babel-preset-vue2/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/babel-preset-vue2.svg" alt="License"></a>
</p>

[简体中文](https://github.com/HaoChuan9421/babel-preset-vue2/blob/master/README.md)&emsp;
[English](https://github.com/HaoChuan9421/babel-preset-vue2/blob/master/README_en.md)&emsp;

### Installation

```
npm i babel-preset-vue2 -D
# or
yarn add babel-preset-vue2 --dev
```

### Features

- Latest ECMAScript features, powered by Babel@7.x（@babel/preset-env）
- Dynamic import（[Link1](https://webpack.js.org/guides/code-splitting/#dynamic-imports)、[Link2](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import)）
- Transform Vue JSX（[Link](https://vuejs.org/v2/guide/render-function.html#JSX)）
- Added es6.array.iterator、es6.promise and es7.promise.finally polyfills by default （[Link](https://github.com/HaoChuan9421/babel-plugin-inject-polyfills)）

### Usage

```js
// babel.config.js

module.exports = {
  presets: [
    "babel-preset-vue2"
  ]
}
```

```js
// webpack.config.js

{
  test: /\.js$/,
  use: {
    loader: "babel-loader"
  },
  exclude(file) {
    return /node_modules/.test(file) && !/\.vue\.js/.test(file);
  }
}
```

### Options

#### jsx

Whether to transform Vue JSX syntax.

Type: `Boolean`

Default: `true`

#### polyfills

Polyfill imports to the entry file.

Type: `Array`（[Built-ins](https://github.com/babel/babel/blob/master/packages/babel-preset-env/data/built-in-features.js)）

Default: 

```js
[
  "es6.array.iterator",
  "es6.promise",
  "es7.promise.finally"
]
```

#### envOptions 

Options of `@babel/preset-env`, [Link](https://babeljs.io/docs/en/babel-preset-env#options).

Type: `Object`

Default: 

```js
{
  "useBuiltIns": "usage",
  "exclude": polyfills,
}
```

### Example

```js
// babel.config.js

module.exports = {
  "presets": [
    [
      "babel-preset-vue2",
      {
        "jsx": true,
        "polyfills": [
          "es6.array.iterator",
          "es6.promise",
          "es7.promise.finally"
        ],
        "envOptions": {
          "debug": true,
          "targets": [
            "> 1%",
            "last 2 versions",
            "ie >=9"
          ]
        }
      }
    ]
  ]
}
```

### License

[MIT](https://github.com/HaoChuan9421/babel-preset-vue2/blob/master/LICENSE)