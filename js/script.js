
// event scroll

$(".page-scroll").on("click",function(event){
	// ambil isi href
	var tujuan = $(this).attr("href");
	// tangkap element
	var elementTujuan = $(tujuan);
	// scroll
	$("body").animate({
		scrollTop:elementTujuan.offset().top-50
	},1250,"easeInOutQuint");

	event.preventDefault();
});

// akhir scroll


// event parallax

$(window).on("load", function(){
	$(".pkiri").addClass("pmuncul");
	$(".pkanan").addClass("pmuncul");
});

$(window).scroll(function() {
	
// jumbotrom
	var wScroll = $(this).scrollTop();

	$(".jumbotron img").css({
		"transform" : "translate(0px, "+ wScroll/4 +"%)"
	});

	$(".jumbotron h1").css({
		"transform" : "translate(0px, "+ wScroll/2 +"%)"
	});

	$(".jumbotron p").css({
		"transform" : "translate(0px, "+ wScroll/1.5 +"%)"
	});


// port
	if( wScroll > $(".portfolio").offset().top-250) {
		$(".portfolio .thumbnail").each(function(i){
			setTimeout(function(){
				$(".portfolio .thumbnail").eq(i).addClass("muncul");
		}, 300 * i);
	});

}});


// akhir parallax