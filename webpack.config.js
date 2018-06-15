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
  // .addEntry('js/lazyload', 'lazyload')
  // .addEntry('js/photoswipe', './node_modules/photoswipe/dist/photoswipe.js')
  // .addEntry('js/photoswipe-ui', './node_modules/photoswipe/dist/photoswipe-ui-default.js')
  .addStyleEntry('css/app', './assets/scss/app.scss')
  .addStyleEntry('css/photoswipe', './node_modules/photoswipe/dist/photoswipe.css')
  .addStyleEntry('css/photoswipe-skin', './node_modules/photoswipe/dist/default-skin/default-skin.css')
;

module.exports = Encore.getWebpackConfig();
