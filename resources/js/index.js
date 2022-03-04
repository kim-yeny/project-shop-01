// START
$(document).ready(function () {
    let slide = $('.slide');
    let slideOn = $('.inner-slide').find('.on').index();
    let slideLength = slide.length;

    // Slide auto change
    var idx = 0;
    setTimeout(autoPlay, 0);

    function autoPlay() {
        slide.removeClass('on');
        slide.eq(idx).addClass('on');
        idx++;
        if (idx >= slideLength) idx = 0;
        setTimeout(autoPlay, 3000);
    }

    // Change slide when click btn at the figure
    $('.btn-prev').click(function () {
        slideOn = $('.inner-slide').find('.on').index();
        slide.eq(slideOn).removeClass('on');
        slideOn -= 1;
        if (slideOn < 0) {
            slide.eq(slideLength - 1).addClass('on');
        } else {
            slide.eq(slideOn).addClass('on');
        }
    });

    $('.btn-next').on('click', function () {
        slideOn = $('.inner-slide').find('.on').index();
        slide.eq(slideOn).removeClass('on');
        slideOn += 1;
        if (slideOn === slideLength) {
            slide.eq(0).addClass('on');
        } else {
            slide.eq(slideOn).addClass('on');
        }
    });

    // Click when press Enter key
    $("[tabindex=0]").keyup(function (event) {
        if (event.keyCode == 13) {
            $(this).click();
        }
    });
});