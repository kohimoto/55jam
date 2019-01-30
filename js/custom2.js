$(function(){
  // -- top page fadeInOut
  //var topHeight = $('.top-main img').height();
  //$('.top-main').css('height', topHeight);
  var fadeInOut = function ($element) {
      var $children = $element.children(),
          current = 0,
          time = 4500,
          speed = '2s';

      $children.css({ transition: speed })
               .eq(current).css({ opacity: '1' });
               setTimeout(function(){
                 $children.eq(current).addClass('in');
               },2000);


      setInterval(function () {

          $children.eq(current).css({ opacity: '0' });

          current = current === $children.length - 1 ? 0 : current += 1;
          $children.eq(current).css({ opacity: '1' });

//          console.log(current);
          if(current == "3"){
          //最初はzoomしないでbackgroundだけ常に動かす
            $('.wrap-top .top-main-wrap').css('background', 'url("./images/common/top_bg_pc.jpg")');
          }else{
            setTimeout(function(){
              $children.eq(current).addClass('in');
              $('.wrap-top .top-main-wrap').css('background', 'url("./images/common/bg_pc.png")');
            },2000);
          }

  $children.eq(current-2).removeClass('in');

      }, time);
  };

  fadeInOut($('.top-main'));



  // -- product page toggle
  $('.list-txt dt').click(function(){
    $(this).next('dd').slideToggle();
  });


    var grid = new Muuri('.grid', {
      sortData: {
        sweet: function (item, element) {
          return parseFloat(element.children[0].getAttribute('data-sweet'));
        },
        fruit: function (item, element) {
          return parseFloat(element.children[0].getAttribute('data-fruit'));
        },
        meal: function (item, element) {
          return parseFloat(element.children[0].getAttribute('data-meal'));
        }
      }
    });

    $('.list-btn li.sort-sweet').click(function(){
      grid.sort('sweet');
      return false;
    });
    $('.list-btn li.sort-fruit').click(function(){
      grid.sort('fruit');
      return false;
    });
    $('.list-btn li.sort-meal').click(function(){
      grid.sort('meal');
      return false;
    });



});
