$('.menu_nav').click(function () {
    $('.menu-con').addClass('active');
});

$('.menu-con>.m-hide').click(function () {
    $('.menu-con').removeClass('active');
});


//top btn 누르면 제일 위로 올라가기

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.top-btn').fadeIn();
    } else {
        $('.top-btn').fadeOut();
    }
});

$('.top-btn').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});


//포트폴리오 모달창 띄우기

$('.port').click(function (e) {
    var target = $(this).data('target');
    $(target).addClass('active')
        .get(0).focus();
    $('.modal-open').addClass('active');
    $('html, body').css({
        'overflow': 'hidden'
    });
});


//포트폴리오 모달창 닫기

$('.modal-header>.close, .modal-footer>.btn, .modal').click(function (e) {
    if (e.target === e.currentTarget) {
        $('.modal, .modal-open').removeClass('active');
        $('html, body').css({
            'overflow': 'auto'
        });
    }
});

$(window).keyup(function (e) {
    if (e.keyCode == 27) {
        $('.modal, .modal-open').removeClass('active');
        $('html, body').css({
            'overflow': 'auto'
        });
    }
});


//아트워크 

$('.e-count > li').click(function () {
    var $clickedBtn = $(this);

    $clickedBtn.parent().find('.active').removeClass('active');
    $clickedBtn.addClass('active');

    var index = $clickedBtn.index();

    $('.e-count-con > .e-contents.active').removeClass('active');
    $('.e-count-con > .e-contents').eq(index).addClass('active');
});





//show all and hide - artwork 

$(function () {
    var selectedClass = "";
    $("p").click(function () {
        selectedClass = $(this).attr("data-rel");
        $("#e-portfolio").fadeTo(100, 0.1);
        $("#e-portfolio div").not("." + selectedClass).fadeOut();
        setTimeout(function () {
            $("." + selectedClass).fadeIn();
            $("#e-portfolio").fadeTo(300, 1);
        }, 300);

    });
});

