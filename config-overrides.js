const reactAppRewirePostcss = require('react-app-rewire-postcss');
const postcssEnvFunction = require('postcss-env-function');

module.exports = function override(config, env) {
  reactAppRewirePostcss(config, {
    plugins: () => [
      postcssEnvFunction({ importFrom: 'src/css-env-variables.js' })
    ]
  });
  return config;
};
