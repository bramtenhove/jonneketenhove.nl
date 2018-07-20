var Encore = require('@symfony/webpack-encore');

Encore
  .setOutputPath('public/assets/')
  .setPublicPath('/assets')
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  .enableSassLoader()
  .cleanupOutputBeforeBuild()
  .enableBuildNotifications()
  .configureFilenames({
    images: 'images/[name].[ext]'
  })

  // Add entries.
  .addEntry('js/images', './assets/js/images.js')
  .addEntry('js/navigation', './assets/js/navigation.js')
  .addEntry('js/alert', './assets/js/alert.js')
  .addEntry('js/app', './assets/js/app.js')
  .addStyleEntry('css/app', './assets/scss/app.scss')
  .addStyleEntry('css/modal-video', './node_modules/modal-video/css/modal-video.min.css')
;

module.exports = Encore.getWebpackConfig();
