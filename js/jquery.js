$('.menu_nav').click(function () {
    $('.menu-con').addClass('active');
});

$('.menu-con>.m-hide').click(function () {
    $('.menu-con').removeClass('active');
});



//포트폴리오 모달창 띄우기

$('.port').click(function (e) {
    console.log(e.currentTarget.dataset.target);
    $(e.currentTarget.dataset.target).addClass('active');
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
