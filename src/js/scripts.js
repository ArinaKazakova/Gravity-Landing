$(document).ready(function() {
    $('.navbar-search__field').hide();
    $('.navbar-search__toggle').on('click', function () {
        $('.navbar-search__field').animate({height:'toggle',
        opacity: 'toggle'}, 600);
    });


    $('.menu__wrap').hide();
    $('.menu__block').on('click', function () {
            $('.menu__wrap').slideToggle();
        }
    );
    document.addEventListener('click', function(){ console.log(this, arguments); });
});
