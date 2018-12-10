# babel-preset-vue2

> 针对 vue@2.x 的 Babel 预设

<p align="center">
    <a href="https://www.npmjs.com/package/babel-preset-vue2"><img src="https://img.shields.io/npm/v/babel-preset-vue2.svg" alt="Version"></a>
    <a href="https://npmcharts.com/compare/babel-preset-vue2?minimal=true"><img src="https://img.shields.io/npm/dm/babel-preset-vue2.svg" alt="Downloads"></a>
    <a href="https://github.com/HaoChuan9421/babel-preset-vue2/commits/master"><img src="https://img.shields.io/github/last-commit/haochuan9421/babel-preset-vue2.svg" alt="Commit"></a>
    <a href="https://github.com/HaoChuan9421/babel-preset-vue2/issues"><img src="https://img.shields.io/github/issues-closed/haochuan9421/babel-preset-vue2.svg" alt="Issues"></a>
    <a href="https://github.com/HaoChuan9421/babel-preset-vue2/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/babel-preset-vue2.svg" alt="License"></a>
</p>

[简体中文](https://github.com/HaoChuan9421/babel-preset-vue2/blob/master/README.md)&emsp;
[English](https://github.com/HaoChuan9421/babel-preset-vue2/blob/master/README_en.md)&emsp;

### 安装

```
npm i babel-preset-vue2 -D
# or
yarn add babel-preset-vue2 --dev
```

### 特性

- 支持最新的 ECMAScript 语法，集成最新的 Babel@7.x（@babel/preset-env）
- 支持动态导入语法（[参考链接1](https://webpack.js.org/guides/code-splitting/#dynamic-imports)、[参考链接2](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import)）
- 支持 Vue JSX 语法（[参考链接](https://vuejs.org/v2/guide/render-function.html#JSX)）
- 默认添加对 es6.array.iterator、es6.promise 和 es7.promise.finally 的 Polyfills（[参考链接](https://github.com/HaoChuan9421/babel-plugin-inject-polyfills)）

### 使用

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

### 参数

#### jsx

是否支持 Vue JSX 语法。

参数类型：`Boolean`

默认值：`true`

#### polyfills

导入到项目入口文件中的 Polyfill。

参数类型：`Array`（[Built-ins](https://github.com/babel/babel/blob/master/packages/babel-preset-env/data/built-in-features.js)）

默认值：

```js
[
  "es6.array.iterator",
  "es6.promise",
  "es7.promise.finally"
]
```

#### envOptions 

`@babel/preset-env` 的参数，[参考链接](https://babeljs.io/docs/en/babel-preset-env#options)

参数类型：`Object`

默认值：

```js
{
  "useBuiltIns": "usage",
  "exclude": polyfills,
}
```

### 示例

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