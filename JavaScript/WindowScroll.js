// JavaScript Document
$(document).ready(function() {
   //Back to top function + Menu slide
	window.onscroll = function(){ScrollFunction()};
	function ScrollFunction(){
		if(document.documentElement.scrollTop >= 100)
		{
			//Back to top
			document.getElementById("topID").style.display = "block";
			//Menu slide
			document.getElementById("menuID").style.position = "fixed";
			document.getElementById("menuID").style.top = "0";
			document.getElementById("menuID").style.zIndex = "99";
			document.getElementById("adsIDleft").style.top = "5px";
			document.getElementById("adsIDright").style.top = "5px";
		}
		else
		{
			//Back to top
			document.getElementById("topID").style.display = "none";
			//Menu slide
			document.getElementById("menuID").style.position = "static";
			document.getElementById("menuID").style.top = "auto";
			document.getElementById("menuID").style.zIndex = "99";
			document.getElementById("adsIDleft").style.top = "auto";
			document.getElementById("adsIDright").style.top = "auto";
		}
	}
	$("#topID").click(function(){
		document.documentElement.scrollTop = 0;
	})
});