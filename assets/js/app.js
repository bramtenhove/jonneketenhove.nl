import ModalVideo from 'modal-video';

document.addEventListener('DOMContentLoaded', function () {

  // Setup modal videos for all video items.
  new ModalVideo('.modal-video-item', {
    youtube: {
      autoplay: 1,
      controls: 1,
      modestbranding: true,
      nocookie: true
    }
  });

  // Make sure escape kills the modal window.
  document.onkeydown = function(evt) {
    evt = evt || window.event;
    let isEscape = false;
    if ("key" in evt) {
      isEscape = (evt.key == "Escape" || evt.key == "Esc");
    }
    else {
      isEscape = (evt.keyCode == 27);
    }

    if (isEscape && document.getElementsByClassName('js-modal-video-dismiss-btn').length > 0) {
      document.querySelector('.js-modal-video-dismiss-btn').click();
    }
  };

});
