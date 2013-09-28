var cases_data = [{
		title:'Pilotfish MCBW event',
		article:'<p><a href=\'http://www.pilotfish.eu/mcbw/\' target=\'_blank\'>http://www.pilotfish.eu/mcbw/</a></p><p>The big innovation event in Munich! Munich Creative Business Week. I designed a webpage to present speech schedule in Pilotfish booth. <b>It\'s all about time!</b> The main part of this design is the time-line and the blobs of speakers. As requesed also made the pdf version and invitation card.</p>',
		//article:'The big innovation event in Munich! Munich Creative Business Week. I designed a webpage to present speech schedule in Pilotfish booth. The main part of this design is the time-line and the blobs of speakers. As requesed also made the pdf version and invitation card.',
		bg_url:'images/mcbw1.png',
		img_id:'bg_mcbw',
		canvas_id:'canvas_mcbw'
	},
	{
			title:'MobiApps Website',
			article:'<p><a href=\'http://www.themobiapps.com\' target=\'_blank\'>http://www.themobiapps.com/</a></p><p>TheMobiApps, the mobile app start-up in Taiwan, was planning to build the company identify prior to media publishing. I designed the whole new website with the 4 key colors in the company logo. The website consisted of the touch keys in present design trend, one-page scroll, simple and html5. It is planned to publish in March, 2013.</p>',
			//article:'The big innovation event in Munich! Munich Creative Business Week. I designed a webpage to present speech schedule in Pilotfish booth. The main part of this design is the time-line and the blobs of speakers. As requesed also made the pdf version and invitation card.',
			bg_url:'images/mobi3.png',
			img_id:'bg_mobiapps',
			canvas_id:'canvas_mobiapps'
		},
		{
				title:'MobiApps',
				article:'<p><a href=\'https://itunes.apple.com/tw/app/ding-hao/id577065907?mt=8\' target=\'_blank\'>Mobiapps @App Store</a></p><p>In end of 2012, I joined the joyful team MobiApps to lead the UX and UI design. We server the mobile app for retail sale and small business. With rapid design pattern, the mobile app can be prompt built and delivered. The flexibility of the team allowed me to break out serveral concepts including smart no-content mode, social biz UI, etc.. Still, I used variable tools like Dropbox or TAP to rapidly test new concept.</p>',
				//article:'The big innovation event in Munich! Munich Creative Business Week. I designed a webpage to present speech schedule in Pilotfish booth. The main part of this design is the time-line and the blobs of speakers. As requesed also made the pdf version and invitation card.',
				bg_url:'images/mobiapps2.png',
				img_id:'bg_mobiapps_app',
				canvas_id:'canvas_mobiapps_app'
			}];

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
		//console.log("hh: "+$("div.case-section:last-child>div.case-description_bg").height());
		var d2 = $("#bg_about").height()+$("#cases").height()-$("div.case-section:last-child>div.case-description_bg").height();
		$("#about>.description").css("top",$(document).scrollTop()*(d2/d1));
		//$("#about>.description").css("top",$(document).scrollTop());
		/*console.log($(document).height());
		console.log($(window).height());
		console.log(d2);
		console.log(d1);
		console.log($(document).scrollTop()*(d2/d1));*/
		//reset mask position
		$("#about>.description_bg").css("top",$("#about>.description").position().top);
		$("#about>.description_bg>canvas").css("top",-1*$("#about>.description").position().top);
		
		for (var key in cases_data){
			//console.log("top"+key+": "+$("div#cases>div.case-section:nth-child("+(parseInt(key)+1)+")").offset().top);
			$("div.case-section:nth-child("+(parseInt(key)+1)+")>div.case-description").css("top",$(document).scrollTop()*(d2/d1)-$("div#cases>div.case-section:nth-child("+(parseInt(key)+1)+")").offset().top);
			$("div.case-section:nth-child("+(parseInt(key)+1)+")>div.case-description_bg").css("top",$("div.case-section:nth-child("+(parseInt(key)+1)+")>div.case-description").position().top);
			$("div.case-section:nth-child("+(parseInt(key)+1)+")>div.case-description_bg>canvas.case-blur_canvas").css("top",-1*$("div.case-section:nth-child("+(parseInt(key)+1)+")>div.case-description").position().top);
		}
		
	});
	
	var case_box;
	
	for (var key in cases_data){
		$("#cases").loadTemplate($("#template"),cases_data[key],{append:true});
		//$("#cases").append(case_box);
	}
	
	$("#cases>div.case-section").each(function(key,element){
		//blur the description bg
		var img_id, canvas_id;
		$(element).children("img.case-bg").load(function(){
			img_id = $(this).attr("id");
			//console.log($(this).parent().find("canvas.case-blur_canvas").html());
			canvas_id = $(this).parent().find("canvas.case-blur_canvas").attr("id");
			//console.log(img_id+"::"+canvas_id);
			stackBlurImage(img_id,canvas_id,24,true);
			$(this).parent().children("div.case-description_bg").height($(this).parent().children("div.case-description").outerHeight());
			//$("#about>.description_bg").css("left",$("#about>.description").position().left);
			//console.log("top:"+$(this).parent().children("div.case-description").position().top);
			$(this).parent().children("div.case-description_bg").css("top",$(this).parent().children("div.case-description").position().top);
			$(this).parent().find("canvas.case-blur_canvas").css("top",-1*$(this).parent().children("div.case-description").position().top);
		});
	});
	
	/*$("#cases").loadTemplate($("#template"),{
		title:'Pilotfish MCBW event',
		article:'<p><a href=\'http://www.pilotfish.eu/mcbw/\' target=\'_blank\'>http://www.pilotfish.eu/mcbw/</a></p><p>The big innovation event in Munich! Munich Creative Business Week. I designed a webpage to present speech schedule in Pilotfish booth. <b>It\'s all about time!</b> The main part of this design is the time-line and the blobs of speakers. As requesed also made the pdf version and invitation card.</p>',
		//article:'The big innovation event in Munich! Munich Creative Business Week. I designed a webpage to present speech schedule in Pilotfish booth. The main part of this design is the time-line and the blobs of speakers. As requesed also made the pdf version and invitation card.',
		bg_url:'images/mcbw1.png',
		img_id:'bg_mcbw'
	});*/
	
	//$("div.case-section").children("img.case-bg").each()
	
});