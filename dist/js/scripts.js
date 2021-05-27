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

    var $prevIcon = '<button class="slick-arrow slick-prev">' +
				'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">' +
					'<path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>' +
				'</svg>' +
			'</button>',
		$nextIcon = '<button class="slick-arrow slick-next">' +
					'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">' +
					'<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>' +
					'</svg>' +
			'</button>';

	$('.js-slider-food').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $prevIcon,
		nextArrow: $nextIcon,
		dots: false,
		cssEase: 'ease',
		speed: 750
	});

	$('.js-slider-articles').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		cssEase: 'ease',
		speed: 500,
		fade: true,
		adaptiveHeight: true,
		draggable: false,
		swipe: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					fade: false
				}
			}
		]
	});

	$('.js-slider-reviews').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $prevIcon,
		nextArrow: $nextIcon,
		dots: false,
		cssEase: 'ease',
		speed: 500,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('[data-tabs] [data-link]').on('click', function() {
		var t = $(this);

		if ( !t.hasClass('is-active') ) {
			var id = +t.attr('data-link')-1,
				$container = t.parents('[data-tabs]'),
				$slider = $container.find('.js-slider-articles'),
				$links = $container.find('[data-link]');

			$links.removeClass('is-active');
			t.addClass('is-active');
			$slider.slick('slickGoTo', id);
		}
	});

	$('[data-services] [data-service-item]').on('click', function() {
		var t = $(this);
		if ( !t.hasClass('is-active') ) {
			var id = +t.attr('data-service-item'),
				$container = t.parents('[data-services]'),
				$links = $container.find('[data-service-item]'),
				$info = $container.find('[data-service-info]'),
				$content = $('[data-services-content]');

			$links.removeClass('is-active');
			t.addClass('is-active');

			$info.removeClass('is-visible')
				.filter('[data-service-info="'+id+'"]')
				.addClass('is-visible');

			if ( isMobile ) {
				$content.detach().insertAfter($links.filter('.is-active'));
			}
		}
	});

	var isMobile = false,
		justSwitched = false;

	function detectDevice() {
		var temp = isMobile;
		isMobile = !!Modernizr.mq('(max-width: 767px)');
		justSwitched = temp !== isMobile;
	}


    function startApp() {
		detectDevice();
		if ( justSwitched ) {
			$('[data-services]').each(function() {
				var $t = $(this),
					$content = $t.find('[data-services-content]');

				if ( isMobile ) {
					var $activeItem = $t.find('[data-service-item]').filter('.is-active');
					$content.detach().insertAfter($activeItem);
				} else {
					$content.detach().appendTo($t);
				}
			});
		}
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
