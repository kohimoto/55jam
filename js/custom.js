$(function(){

  //youtube
  $('.playicon').click(function(){
    ytPlayer.playVideo();
    $('.poster_list').css('display', 'none');
  });

  //youtube
  $('.playicon_2').click(function(){
    ytPlayer_2.playVideo();
    $('.poster_list_2').css('display', 'none');
  });


  var fadeInOut = function ($element) {
      var $children = $element.children(),
          current = 0,
          time = 6000,
          speed = '6.0s ease-in';

      $children.eq(current).css({ opacity: '1', transition:'opacity 1500ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 6000ms linear' });
               setTimeout(function(){
                 $children.eq(current).addClass('in');
               },0);

      setInterval(function () {

          $children.eq(current).css({ opacity: '0' });

          current = current === $children.length - 1 ? 0 : current += 1;

          if(0 && current == "3"){
            $children.css({ transition: speed })
                     .eq(current).css({ opacity: '1' });

          }else{
            setTimeout(function(){
              $children.eq(current).addClass('in');
              $children.eq(current).css({ opacity: '1', transition:'opacity 1500ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 6000ms linear' });
            },0);

          }

  $children.eq(current-2).removeClass('in');

      }, time);
  };
  fadeInOut($('.top-move'));



  // -- product page toggle
  $('.list-txt dt').click(function(){
    $(this).next('dd').slideToggle();
  });

   //Tab to top
    $(".scroll-top-wrapper img").on("click", function() {
     $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
 });

});
