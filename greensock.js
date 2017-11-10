(function($) {
$(document).ready(function() {
    
    $('#box1').onScreen({
        doIn: function() {
            //timeline header area
            var menu1 = $('.menu-box1');
            var menu2 = $('.menu-box2');
            var menu3 = $('.menu-box3');
            var godown = $('.godown');

            $('.detail1');
            tl = new TimelineMax();
            
            tl
            .from(menu1, 1.8, {y: -500, autoAlpha: 1, ease:Elastic.easeOut.config(1, 0.55)})
            .add('menu1')
             .from(menu2, 1.8, {y: -500, autoAlpha: 1, ease:Elastic.easeOut.config(1, 0.55)}, 'menu1-=1')
             .add('menu2')
              .from(menu3, 1.8, {y: -700, autoAlpha: 1, ease:Elastic.easeOut.config(1, 0.55)}, 'menu2-=1')
              .add('menu3')
                .from(godown, 1.25, {y:-100, autoAlpha:0, ease:Power1.easeIn}, 'menu3-=1')
        }
    });

    // Portfolio animatie.
    $('#portfolio-items').onScreen({
      doIn: function () {
        tl = new TimelineMax();
        tl
          .to($('#portfolio-items .photos .detail1 .shine'), 0.75, {left:300, opacity: 1, repeat: 2, repeatDelay: 0.5})
          .add('detail1')
          .to($('#portfolio-items .photos .detail2 .shine'), 0.75, {left:300, opacity: 1, repeat: 2, repeatDelay: 0.5}, 'detail1-=1')
          .add('detail2')
          .to($('#portfolio-items .photos .detail3 .shine'), 0.75, {left:300, opacity: 1, repeat: 2, repeatDelay: 0.5}, 'detail2-=1')
          .add('detail3')
          .to($('#portfolio-items .photos .detail4 .shine'), 0.75, {left:300, opacity: 1, repeat: 2, repeatDelay: 0.5}, 'detail3-=1')
          .add('detail4')
          .to($('#portfolio-items .photos .detail5 .shine'), 0.75, {left:300, opacity: 1, repeat: 2, repeatDelay: 0.5}, 'detail4-=1')
          .add('detail5')
          .to($('#portfolio-items .photos .detail6 .shine'), 0.75, {left:300, opacity: 1, repeat: 2, repeatDelay: 0.5}, 'detail5-=1')
          .add('detail6')
          .to($('#portfolio-items .photos .detail7 .shine'), 0.75, {left:300, opacity: 1, repeat: 2, repeatDelay: 0.5}, 'detail6-=1')
          .add('detail7')
          .to($('#portfolio-items .photos .detail8 .shine'), 0.75, {left:300, opacity: 1, repeat: 2, repeatDelay: 0.5}, 'detail7-=1')
          .add('detail8')
          .to($('#portfolio-items .photos .detail9 .shine'), 0.75, {left:300, opacity: 1, repeat: 2, repeatDelay: 0.5}, 'detail8-=1');
      }
    });

    // About text animatie.
    $('#about .about-text').onScreen({
        doIn: function() {
            // timeline about area
            var text = $('.about-text');
            tl = new TimelineMax();

            tl
            .from(text, 1.25, {x:-150, autoAlpha:0, ease:Power1.easeIn});
        }
    });

    // Plaatje van mij.
    $('#about .ik').onScreen({
    doIn: function() {
      // timeline about area
      var ik = $('.ik');
      tl = new TimelineMax();

      tl
        .staggerFromTo(ik, 1.5, { scale: 0, rotation:-180 }, { scale: 1, opacity: 1, rotation: 0, ease: Back.easeOut }, 0.3);
    }
    });
    
     $('#contact').onScreen({
        doIn: function() {
            // timeline footer erae
            var footertext = $('.footer-text');
            tl = new TimelineMax();

            tl
            .from(footertext, 1.25, {y:+150, autoAlpha:0, ease:Power1.easeIn});
        }
    });
            

});
})(jQuery);