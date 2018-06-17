document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('article.tile').forEach(function(element) {
    element.addEventListener('click', function() {
      element.querySelector('figure').click();
    });
  });

});