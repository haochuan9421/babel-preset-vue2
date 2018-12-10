module.exports = function(context, options = {}) {
  const polyfills = options.polyfills || [
    'es6.array.iterator',
    'es6.promise',
    'es7.promise.finally'
  ];
  const envOptions = Object.assign({
    'useBuiltIns': 'usage',
    'exclude': []
  }, options.envOptions);

  envOptions.exclude = [...new Set([...polyfills, ...envOptions.exclude])]; // 合并去重

  const presets = [
    [
      require('@babel/preset-env'),
      envOptions
    ]
  ];

  const plugins = [
    require('@babel/plugin-syntax-dynamic-import'),
    [
      require('babel-plugin-inject-polyfills'),
      {
        polyfills
      }
    ]
  ];

  // JSX
  if (options.jsx !== false) {
    plugins.push(
      require('@babel/plugin-syntax-jsx'),
      require('babel-plugin-transform-vue-jsx'),
    );
  }
  return {
    presets,
    plugins
  };
};
