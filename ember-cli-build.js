/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var env = EmberApp.env();

var isProductionLikeBuild = ['production', 'staging'].indexOf(env) > -1;

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    fingerprint: {
      enabled: isProductionLikeBuild,
      extensions: ['js', 'css', 'png', 'jpg', 'gif', 'map', 'svg'],
      prepend: 'https://s3.amazonaws.com/assets.charity-auction-web/',
    },
    sourcemaps: {
      enabled: !isProductionLikeBuild,
    },
    minifyCSS: {
      enabled: isProductionLikeBuild
    },
    minifyJS: {
      enabled: isProductionLikeBuild
    },
    tests: process.env.EMBER_CLI_TEST_COMMAND || !isProductionLikeBuild,
    hinting: process.env.EMBER_CLI_TEST_COMMAND || !isProductionLikeBuild
  });

  return app.toTree();
};
