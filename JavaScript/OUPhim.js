// JavaScript Document
$(document).ready(function() {
	//slide Image
    $("ul#sliderID >li").hide();
	$("ul#sliderID > li:first").show();
	setInterval(function() {
		nextClick();
	}, 7000);
	function backClick(){
			$("ul#sliderID > li:first").fadeOut(1);
			$("ul#sliderID > li:last").prependTo("#sliderID");
			$("ul#sliderID > li:first").fadeIn("slow").end();
	}
	function nextClick(){
		$("ul#sliderID > li:first").fadeOut(1);
		$("ul#sliderID > li:first").next().fadeIn("slow").end().appendTo("#sliderID");
	}

	$("#backID").click(function(){
		backClick();
	})
	$("#nextID").click(function(){
		nextClick();
	})
});
