var Encore = require('@symfony/webpack-encore');

Encore
  .setOutputPath('public/assets/')
  .setPublicPath('/assets')
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  .enableSassLoader()
  .cleanupOutputBeforeBuild()
  .enableBuildNotifications()

  // Add entries.
  .addEntry('js/navigation', './assets/js/navigation.js')
  .addEntry('js/alert', './assets/js/alert.js')
  .addStyleEntry('css/app', './assets/scss/app.scss')
;

module.exports = Encore.getWebpackConfig();
