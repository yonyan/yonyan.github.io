
var alterTexts = ['EL WIDE','CORPORATION'];
var textIndex = -1;

function loopText() {
    textIndex++;
    
    if(textIndex >= alterTexts.length)
        {
            textIndex = 0;
        }
    var alterText = alterTexts[textIndex];
    
$('div.alterText').text(alterText);
}

setInterval(function () {
    loopText();   
},700);



$('.menu-2 > ul > li').click(function() {
    var $clickedBtn = $(this);
    
    $clickedBtn.parent().find('.active').removeClass('active');
    $clickedBtn.addClass('active');
    
    var index = $clickedBtn.index();
    
    $('.menu-2-contents > div.active').removeClass('active');
    $('.menu-2-contents > div').eq(index).addClass('active');
    
    return false;
});

$('.menu-3 > ul > li').click(function() {
    var $clickedBtn = $(this);
    
    $clickedBtn.parent().find('.active').removeClass('active');
    $clickedBtn.addClass('active');
    
    var index = $clickedBtn.index();
    
    $('.menu-3-contents > div.active').removeClass('active');
    $('.menu-3-contents > div').eq(index).addClass('active');
    
    return false;
});

$('.menu-4 > ul > li').click(function() {
    var $clickedBtn = $(this);
    
    $clickedBtn.parent().find('.active').removeClass('active');
    $clickedBtn.addClass('active');
    
    var index = $clickedBtn.index();
    
    $('.menu-4-contents > div.active').removeClass('active');
    $('.menu-4-contents > div').eq(index).addClass('active');
    
    return false;
});