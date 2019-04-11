$('.m_menu').click(function() {
    $('.menu').addClass('active');
});

$('.menu>.m_hide').click(function() {
    $('.menu').removeClass('active');
});


/*
var alterTexts = ['INTEGRATED O2O BUSINESS','SERVICES COMPANY'];
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
*/

