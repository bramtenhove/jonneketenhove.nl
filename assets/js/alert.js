document.addEventListener('DOMContentLoaded', function () {

  // Get all "delete" elements.
  let $delete = Array.prototype.slice.call(document.querySelectorAll('.delete'), 0);

  // Check if there are any delete elements.
  if ($delete.length > 0) {

    // Add a click event on each of them.
    $delete.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Remove the parent element.
        $el.parentNode.remove();

      });
    });
  }

});