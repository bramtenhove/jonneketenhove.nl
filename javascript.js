(function($) {

    // goto functie. scrollt naar een element.
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 550);
        return this; // for chaining...
    };

$(document).ready(function(){
    //api gegevens voor het opvragen van de sliderfoto. 
    var collection = '1327480';
    var applicationId = 'a5a19abf5cea5a757244a3c2e026b9056f6037b5a3ce9cea5cb38ec9cdce0152';

    //vraagt foto op bij unsplash met bovenstaande gegevens. 
    $.ajax({
        url: 'https://api.unsplash.com/photos/random?collections=' + collection + '&orientation=landscape&count=1',
        headers: {'Authorization': 'Client-ID ' + applicationId},
        dataType: 'json'
    })
    .done(function(data) {
        // Vervang achtergrond door resultaat.
        $('#box1').css('background-image', 'url(' + data[0].urls.regular + ')');
    })
    .fail(function() {
        // Vervang achtergrond door standaard foto gebeurd alleen als api niet werkt.
        $('#box1').css('background-image', 'url("images/bg1.jpg")');
    });

    // click menu-box link, scroll ernaar toe.
    $( ".menu-box a, #box1 .godown a" ).on( "click", function( event ) {
        // zorg ervoor dat hij niet de standaard klik functie uitvoert.
        event.preventDefault();

        // zoek href attribuut en scroll er naar toe.
        var href = $(this).attr('href');
        $(href).goTo();
    });

    // omhoog scrollen automatisch.
    $( ".dots-menu" ).on( "click", function( event ) {
      $("#box1").goTo();
    });    


});

})(jQuery);
