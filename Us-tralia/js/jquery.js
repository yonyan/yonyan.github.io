
/*메인슬라이더 시작*/

$('.slider-u').each(function (index, node) {
    var $slider = $(node);
});

$('.slider-u').each(function (index, node) {
    var $slider = $(node);

    $slider.mouseenter(function () {
        $slider.attr('data-autoplay-now-work', 'N');
    });

    $slider.mouseleave(function () {
        $slider.attr('data-autoplay-now-work', 'Y');
    });

    var autoplay = $slider.attr('data-autoplay');

    if (autoplay != 'Y') {
        return false;
    }

    var autoplayInterval = $slider.attr('data-autoplay-interval') * 1;

    setInterval(function () {
        var work = $slider.attr('data-autoplay-now-work') != 'N';
        if (work) {
            SliderU__move($slider, 1);
        }
    }, autoplayInterval);
});

$('.slider-u > .page-nav > div').click(function () {
    var $slider = $(this).closest('.slider-u');
    var no = $(this).index();
    var currentNo = $(this).parent().find('.active').index();
    var dir = no > currentNo ? 1 : -1;

    SliderU__show($slider, no, dir);
});

function SliderU__show($slider, no, dir) {
    var $current = $slider.find('.slides > div.active');
    var $post = $slider.find('.slides > div').eq(no);
    var duration = 500;

    if ($current.index() == no) {
        return false;
    }

    if (dir == 1) {
        $post.css('left', '100%');
        $current.animate({
            'left': '-100%'
        }, duration);
        $post.animate({
            'left': '0'
        }, duration);
    } else {
        $post.css('left', '-100%');
        $current.animate({
            'left': '100%'
        }, duration);
        $post.animate({
            'left': '0'
        }, duration);
    }

    $current.removeClass('active');
    $post.addClass('active');

    SliderU__updatePageNav($slider, no);
}

function SliderU__move($slider, dir) {
    var $current = $slider.find('.slides > div.active');
    var $first = $slider.find('.slides > div:first-child');
    var $last = $slider.find('.slides > div:last-child');
    var $post = null;

    if (dir == 1) {
        $post = $current.next();
    } else {
        $post = $current.prev();
    }

    if ($post.length == 0) {
        if (dir == 1) {
            $post = $first;
        } else {
            $post = $last;
        }
    }

    SliderU__show($slider, $post.index(), dir);
}

function SliderU__updatePageNav($slider, no) {
    var $active = $slider.find('.page-nav > div.active');
    var $post = $slider.find('.page-nav > div').eq(no);

    $active.removeClass('active');
    $post.addClass('active');
}


/*메인슬라이더 끝*/


