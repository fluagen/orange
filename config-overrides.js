const { injectBabelPlugin } = require('react-app-rewired');
// const rewireLess = require('react-app-rewire-less');
const rewireCssModules = require('react-app-rewire-css-modules');

module.exports = function override(config, env) {

  config = injectBabelPlugin(['import', { libraryName: 'antd', style: 'css' }], config);

  config = rewireCssModules(config, env);

  return config;
};
