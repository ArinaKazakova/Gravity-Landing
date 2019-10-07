$(document).ready(function() {
    $('.navbar-search__field').hide();
    $('.navbar-search__toggle').on('click', function () {
        $('.navbar-search__field').animate({height:'toggle',
            opacity: 'toggle'}, 500);
    });


    $('.menu__wrap').hide();
    $('.menu__block').on('click', function () {
        $('.menu__wrap').slideToggle();
    }
    );

    let width = $('.services-slider__item').outerWidth(true);
    let slideCount = $('.services-slider__container').children().length;
    let slideLeft = width + (width/2);
    let sliderWidth = slideCount  * width;
    let slideNow = 1;
    $('.services-slider__container').css('width', sliderWidth);
    


    $('.services-slider__item').eq(slideNow ).css('opacity', '0.5');
    
    console.log(slideNow);
    $('#next').on('click', function nextSlide() {
        $('.services-slider__item').eq(slideNow + 1).css('opacity', '0.5');
        $('.services-slider__item').eq(slideNow).css('opacity', '1');
        console.log(slideNow);
        if (slideNow == slideCount || slideNow <= 0 ) {
            $('.services-slider__container').css('transform', 'translate(0, 0)');
            slideNow = 1;
            $('.services-slider__item').eq(slideNow ).css('opacity', '0.5');
        } else {
            translateWidth = - width * (slideNow);
            $('.services-slider__container').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow++;
        }
    })
});
