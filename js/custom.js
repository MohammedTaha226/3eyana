const splash = 	document.querySelector(".splash");

document.addEventListener("DOMContentLoaded",(e)=> {
	setTimeout(()=> {
		splash.classList.add("displayNone");
	})
});


$(function(){



	$(".openMenu").click(function () {
		
		$("body,html").addClass("overflowH");
		$(".menuMobile").fadeIn();
		$(".transformPage,.menuMobile .menuContent").addClass("active");
		
	});
	
	$(".closeX,.BgClose,.menuMobile .menuContent a").click(function () {
		
		$("body,html").removeClass("overflowH");
		$(".menuMobile").fadeOut();
		$(".transformPage,.menuMobile .menuContent").removeClass("active");
		
	});

	$.scrollIt({topOffset:0});
	   var c, currentScrollTop = 0,
	       navbar = $('.header');
	   $(window).scroll(function () {
	      var a = $(window).scrollTop();
	      var b = navbar.height();
	      currentScrollTop = a;
	      if (c < currentScrollTop && a > b + b) {
	        navbar.addClass("scrollUp");
	      } else if (c > currentScrollTop && !(a <= b)) {
	        navbar.removeClass("scrollUp");
	      }
	      c = currentScrollTop;
	  });
  
	if($(window).scrollTop() > 100) {
		$(".header").addClass("headerFixed");
	} else {
		$(".header").removeClass("headerFixed");
	}

	$(window).scroll(function () {
		if($(this).scrollTop() > 100) {
			$(".header").addClass("headerFixed");
		} else {
			$(".header").removeClass("headerFixed");
		}
	});
	
	/****** Start Tabs ******/
	
	$(".tabsBtns li").click(function () {
		
		var myButton = $(this).attr("id"),
			parent = $(this).parent().attr("id");
		
		$(this).addClass("active").siblings().removeClass("active");
		
		$("."+parent+" .tab").hide();
		
		$("."+parent+" ." + myButton).fadeIn();
		
	});
	
	/****** End Tabs ******/
	

	$(".inputStyle input, .inputStyle textarea").keyup(function() {
	    if($(this).val().length > 0) {
	         $(this).parent().addClass("active");
	    } else {
	        $(this).parent().removeClass("active");
	    }
	});
	
	$( ".datepicker" ).datepicker();
	
	$( ".selectmenu" ).selectmenu();
	
	$(".orderPage .formOrder .listPhotos li .removeImg").click(function() {
		$(this).parent().remove();
	});
	

	$(".orderPage .formOrder .socialInputs .title").click(function () {
		$(this).siblings().slideToggle();
	});

	  
	$('body,html').on('click', function(e) {
		var container = $(".orderPage .formOrder .socialInputs *"),
		Sub = $(".orderPage .formOrder .socialInputs .socialList");
		

	    if( !$(e.target).is(container)  ){
	        Sub.slideUp();
	    }

	});

	
	
	
	
	
	
	
	
});
