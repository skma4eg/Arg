if (window.navigator.standalone == true) {
 $('body').addClass('ios-web-app');
}

if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
		$('body').addClass('ios');
	}

$(window).on('load resize', function () {
  if ($(document).width() <= 600) {
  $('input').attr('placeholder', 'Search');
}	else {
  $('input').attr('placeholder', 'Search Zayn..');
}
});


$('header .menu, .menu-overlay').on('click', function () {
  $('main, nav').toggleClass('opened');
  featured();
  cards();
  genres();
})


$('nav li').on('click', function() {
  $('nav li').removeClass('active');
  $(this).addClass('active');
});


$('header .search-btn, .header .back').on('click', function () {
  $('header .mobile-search').toggleClass('searching');
})

	// PROFILE MENU

	$('.profile-tikla').on('click', function() {
		$('.account').toggleClass('active');
	});

	$(document).on("click", function(e) {
		if (($(".account").hasClass("active")) && (!$(".account, .account *, .profile-tikla").is(e.target))) {
			$(".account").toggleClass("active");
		}
	});

	$(window).scroll(function() {
		$('.account').removeClass('active');
	});


// Ripple Code 

$(document).on('click', '.ripple', function(e) {

		var $ripple = $('<span class="rippling" />'),
			$button = $(this),
			btnOffset = $button.offset(),
			xPos = e.pageX - btnOffset.left,
			yPos = e.pageY - btnOffset.top,
			size = 1,
			animateSize = parseInt(Math.max($button.innerWidth(), $button.innerHeight()) * Math.PI);

		$ripple.css({
				top: yPos,
				left: xPos,
				width: size,
				height: size,
				backgroundColor: $button.attr("ripple-color"),
				opacity: $button.attr("ripple-opacity")
			})
			.appendTo($button)
			.animate({
				width: animateSize,
				height: animateSize,
        // transform: 'scale(' + animateSize + ')',
				opacity: 0
			}, 500, function() {
				$(this).remove();
			});
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() >= $(".hero").height()) {
			$("header").addClass("shadow");
		} else {
			$("header").removeClass("shadow");
		}
	});
// $( ".ripple" ).trigger( "click" );$( ".ripple" ).trigger( "click" );  




//personal notes
  //  background-image: initial;
  //  background-position-x: initial;
  //  background-position-y: initial;
  //  background-size: initial;
 //   background-repeat-x: initial;
  //  background-repeat-y: initial;
 //   background-attachment: initial;
  ////  background-origin: initial;
  //  background-clip: initial;
 //   background-color: transparent;