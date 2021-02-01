/*=====================================Меню-бургер==============================*/


$(document).ready(function () {
	$('.menu__burger').click(function (event) {
		$('.menu__burger, .nav_menu').toggleClass('active');
		$('body').toggleClass('lock')
	});
});

$(document).ready(function () {
	$('.menu').click(function (event) {
		$('.menu__burger, .nav_menu').removeClass('active');
		$('body').removeClass('lock')
	});
});

