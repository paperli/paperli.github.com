$(document).ready(function(){
	
	$("#bg_about").load(function(){
		stackBlurImage("bg_about","canvas_about",24,true,[parseInt($("#about>.description").position().left),parseInt($("#about>.description").position().top),parseInt($("#about>.description").width()),parseInt($("#about>.description").height())]);
		console.log("x: "+$("#about>.description").position().left);
		console.log("y: "+$("#about>.description").position().top);
		console.log("w: "+$("#about>.description").width());
		console.log("h: "+$("#about>.description").height());
		//$(this).hide();
		$("#about>.description_bg").height($("#about>.description").outerHeight());
		//$("#about>.description_bg").css("left",$("#about>.description").position().left);
		$("#about>.description_bg").css("top",$("#about>.description").position().top);
		$("#about>.description_bg>canvas").css("top",-1*$("#about>.description").position().top);
	});
	
	
	//TODO: handle window resize
	$(document).scroll(function(){
		//console.log($(document).scrollTop());
		
		var d1 = $(document).height() - $(window).height();
		var d2 = $("#bg_about").height()-$("#about>.description_bg").height();
		$("#about>.description").css("top",$(document).scrollTop()*(d2/d1));
		console.log($(document).height());
		console.log($(window).height());
		console.log(d2);
		console.log(d1);
		console.log($(document).scrollTop()*(d2/d1));
		//reset mask position
		$("#about>.description_bg").css("top",$("#about>.description").position().top);
		$("#about>.description_bg>canvas").css("top",-1*$("#about>.description").position().top);
	});
	
	$("#cases").loadTemplate($("#template"),{
		title:'Pilotfish MCBW event',
		content:'<p><a href=\'http://www.pilotfish.eu/mcbw/\' target=\'_blank\'>http://www.pilotfish.eu/mcbw/</a></p><p>The big innovation event in Munich! Munich Creative Business Week. I designed a webpage to present speech schedule in Pilotfish booth. <b>It\'s all about time!</b> The main part of this design is the time-line and the blobs of speakers. As requesed also made the pdf version and invitation card.</p>',
		bg_url:'images/mcbw1.png'
	});
	
});