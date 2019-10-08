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

    /* Video Slider */
    const width = $('.services-slider__item').outerWidth(true);
    const slideCount = $('.services-slider__container').children().length;
    const sliderWidth = slideCount  * width;
    let slideNow = 1;

    $('.services-slider__container').css('width', sliderWidth);
    $('.services-slider__item').eq(slideNow).css('opacity', '0.5');
    
    $('#next').on('click', function nextSlide() {
        $('.services-slider__item').eq(slideNow + 1).css('opacity', '0.5');
        $('.services-slider__item').eq(slideNow).css('opacity', '1');
        
        if (slideNow == slideCount || slideNow <= 0 ) {
            $('.services-slider__container').css('transform', 'translate(0, 0)');
            slideNow = 1;
            $('.services-slider__item').eq(slideNow ).css('opacity', '0.5');
        }
        else if (slideNow == slideCount - 1 && document.body.clientWidth >= 1173 ){
            let translateWidth = - width * (slideNow) + width/3;
            $('.services-slider__container').css({
                'transform': 'translate(' + translateWidth + 'px, 0)'
            });
            slideNow++;
        }
        else {
            let translateWidth = - width * (slideNow);
            $('.services-slider__container').css({
                'transform': 'translate(' + translateWidth + 'px, 0)'
            });
            slideNow++;
        }
    });

    $('#prev').on('click', function prevSlide() {
        
        $('.services-slider__item').eq(slideNow - 1).css('opacity', '0.5');
        
        if (slideNow == 1) {
            $('.services-slider__container').css('transform', 'translate(0, 0)');
            $('.services-slider__item').eq(slideNow - 1).css('opacity', '1');
            slideNow = 1;
            
             
        } else {
            let stepBack = -width * (slideNow - 2);
            $('.services-slider__container').css({
                'transform': 'translate(' + stepBack + 'px, 0)' 
            });
            slideNow--;
           
        }
    });
});
