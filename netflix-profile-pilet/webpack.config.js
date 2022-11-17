module.exports = function (config) {
  config.module.rules[0].oneOf.unshift({
    test: /\.yml$/,
    use: 'js-yaml-loader',
  });
  return config;
};
