$(function() {
    svg4everybody();

    $('.js-slider-set').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        cssEase: 'ease',
        speed: 500
    });

	$('.js-slider-food').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<button class="slick-arrow slick-prev">' +
				'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">' +
					'<path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>' +
				'</svg>' +
			'</button>',
		nextArrow: '<button class="slick-arrow slick-next">' +
				'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">' +
					'<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>' +
				'</svg>' +
			'</button>',
		dots: false,
		cssEase: 'ease',
		speed: 750
	});

    function startApp() {
    }

    startApp();

    var lastWidth = $(window).width();
    $(window).on('resize', _.debounce(function() {
        if ( $(window).width() !== lastWidth ) {
            startApp();
            lastWidth = $(window).width();
        }
    }, 100));
});
