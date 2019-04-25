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

if (window.jQuery) {
  jQuery.prototype.mememiScroller = function(padding) {
    return this.each(function(i, elem) {
      jQuery(elem).on('mousemove touchmove', function(e) {
        var cx = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX
        var cw = this.clientWidth

        if (padding > cx || cx > cw-padding) {
          return true
        }

        var posX = cx-padding
        var moveZoneWidth = cw-(2*padding)
        var totalScrollLeftWidth = this.scrollWidth - cw

        jQuery(this).scrollLeft(posX*totalScrollLeftWidth/moveZoneWidth)
      })
    })
  }
}
$('.con_1').mememiScroller(50);

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

//top btn 위로 올라가기 버튼

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.top-btn').fadeIn();
    } else {
        $('.top-btn').fadeOut();
    }
});

