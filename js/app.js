// console.log('hi');


$(document).ready(function(){

	// Start Info Section
	$(window).scroll(function(){

		let getscorllpoint = $(this).scrollTop();
		// console.log(getscorllpoint);

		if(getscorllpoint >= 420){
			$('.infotexts').addClass('fromleft');
			$('.infopictures').addClass('fromright');
		}else{
			$('.infotexts').removeClass('fromleft');
			$('.infopictures').removeClass('fromright');
		}
	});
	// End Info Section


	// Start Adv Section
	$("#videos").click(function(){
		var getmodal = $(this).data('bs-target');
		var getvideosrc = $(this).data("video");
		var videourlwithauto = getvideosrc+"?autoplay=1";

		$(getmodal + " iframe").attr("src",videourlwithauto);

		$(getmodal).click('hidden.bs.modal',function(){
			$(getmodal + "iframe").attr("src",getvideosrc);
		});
	});
	// End Adv Section


	// Start Premises Section
	$('#lightslider').lightSlider({
		// auto:true,
		item:4,
		loop:true,
		slideMove:1,
		speed:600
	}).play();
	// End Premises Section
	

	// Start Pricing Section
	$(window).scroll(function(){
		let getscorll = $(this).scrollTop();
		// console.log(getscorll);

		if(getscorll >= 2450){
			$('.cardones').addClass('movelefts');
			$('.cardtwos').addClass('movebottoms');
			$('.cardthrees').addClass('moverights');
		}else{
			$('.cardones').removeClass('movelefts');
			$('.cardtwos').removeClass('movebottoms');
			$('.cardthrees').removeClass('moverights');
		}

	});
	// End Pricing Section

	// Start Join Us Section
	$('#accordion').accordion();
	// End Join Us Section


	// Start Footer
	$('#getyear').text(new Date().getUTCFullYear());
	// End Footer


	// Start Progress Section
	$(window).scroll(function(){
		var getprogress = $('.progress');
		var getprogressvalues = $('#progressvalues');
		var getscrollTop = $(this).scrollTop();

		// By Jquery
		var getscrollheight = $(document).height();
		// // console.log(getscrollheight);
		var getclientheight = $(window).height();
		// // console.log(getclientheight);
		var calcheight = getscrollheight - getclientheight;
		var getfinalheight = Math.round(getscrollTop * 100 / calcheight);
		

		// By Javscript
		// var getscrollheight = document.documentElement.scrollHeight;
		// // console.log(getscrollheight);
		// var getclientheight = document.documentElement.clientHeight;
		// // console.log(getclientheight);
		// var calcheight = getscrollheight - getclientheight;
		// var getfinalheight = Math.round(getscrollTop * 100 / calcheight);

		getprogressvalues.text(`${getfinalheight}%`);
		getprogress.css({
			"background":`conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
		});
	})

	// End Progress Section

	

});

