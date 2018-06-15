import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';

document.addEventListener('DOMContentLoaded', function () {
  // Lazyload.
  lazyload();

  var openPhotoSwipe = function () {

    // Photoswipe.
    let pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    let items = [
      {
        src: '/assets/images/gorilla.jpg',
        w: 1000,
        h: 667
      },
      {
        src: 'https://placekitten.com/1200/900',
        w: 1200,
        h: 900
      }
    ];

    // define options (if needed)
    let options = {
      // optionName: 'option value'
      // for example:
      index: 0
    };

    // Initializes and opens PhotoSwipe
    let gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };

  document.getElementById('gorilla').onclick = openPhotoSwipe;
});
