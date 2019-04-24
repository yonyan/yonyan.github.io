$('.responsive-menu-nav').click(function () {
    $('.topmenu .main-menu > ul').addClass('active');
    $('.responsive-menu-nav').addClass('active');
    $('.m-hide').addClass('active');
});

$('.m-hide').click(function () {
    $('.topmenu .main-menu > ul').removeClass('active');
    $('.responsive-menu-nav').removeClass('active');
    $('.m-hide').removeClass('active');
});


//마우스 휠 좌우 스크롤//

$('.con_1').on('mousemove touchmove', function (e) {
    e.preventDefault();

    var $place = $(this);
    var offsetX = e.clientX - $place.offset().left;
    var width = $place.width();
    var scrollWidth = $place.prop("scrollWidth");

    $place.scrollLeft(offsetX / width * scrollWidth - width / 20);
});


// 로그인박스 시작
function showLoginMoal() {
    $('.login-layer').show();
    $('.login-bg').show();
}

function hideLoginMoal() {
    $('.login-layer').hide();
    $('.login-bg').hide();
}

$('.btn-show-login').click(showLoginMoal);

$('.login-bg, .login-layer .btn-close').click(hideLoginMoal);

$(window).keyup(function (e) {
    if (e.keyCode == 27) {
        hideLoginMoal();
    }
});
// 로그인박스 끝

//top btn 위로 올라가기 버튼

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.top-btn').fadeIn();
    } else {
        $('.top-btn').fadeOut();
    }
});
