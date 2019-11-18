import zenscroll from 'zenscroll';
import GLightbox from 'glightbox';

document.addEventListener('DOMContentLoaded', function () {

  // Configure smooth scrolling speed.
  zenscroll.setup(400);

  let selectors = [
    'glightbox1',
    'glightbox2',
    'glightbox3',
    'glightbox4',
    'glightbox5',
    'glightbox6',
    'glightbox7',
    'glightbox8'
  ];
  for (let i = 0; i < selectors.length; i++) {
    GLightbox({
      selector: selectors[i],
      api: "https://www.youtube.com/iframe_api",
      params: {
        autoplay: 1,
        modestbranding: 1,
        showinfo: 0
      }
    });
  }

  // Click the first lightbox item when a tile article is clicked.
  document.addEventListener('click', function (event) {

    // Check if the target matches either the article or its text.
    if (event.target.matches('.tile article')) {
      // Click the first lightbox item.
      event.target.querySelector('.lightbox-items a:first-child').click();
    }
    else if (event.target.matches('p.tile-text')) {
      // Click the first lightbox item.
      event.target.closest('.tile article').querySelector('.lightbox-items a:first-child').click();
    }

  }, false);

});
