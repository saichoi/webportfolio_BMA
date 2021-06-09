$(document).ready(function () {

    //CSS

    var ww = $(window).width();
    var wh = $(window).height();
    

    $('#bookmark').css({
        height: wh
    });


    //EVENT

    //헤어 이벤트
    $(window).scroll(function () {

        sct = $(window).scrollTop();
        ww = $(window).width();
        wh = $(window).height();


        if (ww >= 1440) {
            if (0 == sct) {
                $('#in_header').fadeOut(0);

                $('header').fadeIn(300);
            }

            if (0 < sct && sct >= 100) {

                $('#in_header').fadeIn(300);

                $('header').fadeOut(0);

            }
        }

    });

    //숨김 검색 이벤트
    $('#searching').click(function () {

        $('#search_wrap').css({
            display: 'block'
        });

    });

    $('#close_search').click(function () {
        $('#search_wrap').css({
            display: 'none'
        });

    });


    //ham버튼 이벤트


    $('#ham').click(function () {

        $('#h_menu_wrap').css({
            display: 'block'
        });


    });

    $('#close').click(function () {

        $('#h_menu_wrap').css({
            display: 'none'
        });

    });

    //섹션4 버튼갤러리 움직임 
    var img_move = $('.img_con').width();

    $('#r_arrow').click(function () {

        $('#img_container').animate({
            left: -img_move,
        },1000, function () {
            $('#img_container').css({
                left: 0,
            }).find('.img_con').first().appendTo('#img_container');
        });
    });


    $('#l_arrow').click(function () {
        $('#img_container').animate({

            left: 0,
        }, 1000,function () {

 
            $('#img_container').css({
                left: -img_move,
            }).find('.img_con').last().prependTo('#img_container');
        });
    });



    function action_move() {
        $('#action').animate({
            top: 5
        });
        $('#action').animate({
            top: 0,
        });


    }

    action_move();

    setInterval(function () {
        action_move();
    });



$('#top_btn').click(function(){
    $('body, html').animate({
        scrollTop: 0,
    },2000);
});
    



  AOS.init();

});
