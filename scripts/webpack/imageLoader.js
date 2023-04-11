module.exports = function imageLoader(config) {
  config.module.rules.push({
    test: /\.(jpe?g|png|gif|webp)$/,
    type: 'asset/resource'
  });

  return config;
};
