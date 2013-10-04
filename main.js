var cases_data = [{
		title:'Pilotfish MCBW event',
		article:'<p><a href=\'http://www.pilotfish.eu/mcbw/\' target=\'_blank\'>http://www.pilotfish.eu/mcbw/</a></p><p>The big innovation event in Munich! Munich Creative Business Week. I designed a webpage to present speech schedule in Pilotfish booth. <b>It\'s all about time!</b> The main part of this design is the time-line and the blobs of speakers. As requesed also made the pdf version and invitation card.</p>',
		//article:'The big innovation event in Munich! Munich Creative Business Week. I designed a webpage to present speech schedule in Pilotfish booth. The main part of this design is the time-line and the blobs of speakers. As requesed also made the pdf version and invitation card.',
		bg_url:['images/mcbw.png','images/mcbw-2.png','images/mcbw-3.png'],
		img_id:'bg_mcbw',
		canvas_id:'canvas_mcbw'
	},
	{
			title:'MobiApps Website',
			article:'<p><a href=\'http://www.themobiapps.com\' target=\'_blank\'>http://www.themobiapps.com/</a></p><p>TheMobiApps, the mobile app start-up in Taiwan, was planning to build the company identify prior to media publishing. I designed the whole new website with the 4 key colors in the company logo. The website consisted of the touch keys in present design trend, one-page scroll, simple and html5. It is planned to publish in March, 2013.</p>',
			//article:'The big innovation event in Munich! Munich Creative Business Week. I designed a webpage to present speech schedule in Pilotfish booth. The main part of this design is the time-line and the blobs of speakers. As requesed also made the pdf version and invitation card.',
			bg_url:['images/mobi1.png','images/mobi2.png','images/mobi3.png'],
			img_id:'bg_mobiapps',
			canvas_id:'canvas_mobiapps'
		},
		{
				title:'MobiApps',
				article:'<p><a href=\'https://itunes.apple.com/tw/app/ding-hao/id577065907?mt=8\' target=\'_blank\'>Mobiapps @App Store</a></p><p>In end of 2012, I joined the joyful team MobiApps to lead the UX and UI design. We server the mobile app for retail sale and small business. With rapid design pattern, the mobile app can be prompt built and delivered. The flexibility of the team allowed me to break out serveral concepts including smart no-content mode, social biz UI, etc.. Still, I used variable tools like Dropbox or TAP to rapidly test new concept.</p>',
				//article:'The big innovation event in Munich! Munich Creative Business Week. I designed a webpage to present speech schedule in Pilotfish booth. The main part of this design is the time-line and the blobs of speakers. As requesed also made the pdf version and invitation card.',
				bg_url:['images/mobiapps1.png','images/mobiapps2.png','images/mobiapps3.png','images/mobiapps4.png'],
				img_id:'bg_mobiapps_app',
				canvas_id:'canvas_mobiapps_app'
			}];

var BLUR_RADIUS = 32;

//window width: pic is 100% width of window
var pic_width;

var at_pos = [];

var resize_timer;

$(document).ready(function(){
	
	pic_width = $(window).width();
	
	$("#bg_about").load(function(){
		stackBlurImage("bg_about","canvas_about",BLUR_RADIUS,true);
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
		
		if (parseInt($("#about>.description").css("top"))>$("#about").height()+100){
			$("#about>.description").hide();
		} else {
			$("#about>.description").show();
		}
		
		for (var key in cases_data){
			//console.log("top"+key+": "+$("div#cases>div.case-section:nth-child("+(parseInt(key)+1)+")").offset().top);
			$("div.case-section:nth-child("+(parseInt(key)+1)+")>div.case-description").css("top",$(document).scrollTop()*(d2/d1)-$("div#cases>div.case-section:nth-child("+(parseInt(key)+1)+")").offset().top);
			$("div.case-section:nth-child("+(parseInt(key)+1)+")>div.case-description_bg").css("top",parseInt($("div.case-section:nth-child("+(parseInt(key)+1)+")>div.case-description").css("top")));
			$("div.case-section:nth-child("+(parseInt(key)+1)+")>div.case-description_bg>canvas.case-blur_canvas").css("top",-1*parseInt($("div.case-section:nth-child("+(parseInt(key)+1)+")>div.case-description").css("top")));
			
			//hide/appear button margin: top:20 left:48
			var btn_top = parseInt($("div.case-section:nth-child("+(parseInt(key)+1)+")>div.case-description").css("top"))+20;
			//console.log("button top@"+key+" shall be "+btn_top);
			$("div.case-section:nth-child("+(parseInt(key)+1)+")>a.btnAppear").css("top",btn_top).css("right",48);
			
			//console.log("top@"+key+" is "+$("div.case-section:nth-child("+(parseInt(key)+1)+")>div.case-description").css("top"));
			//console.log($("div.case-section:nth-child("+(parseInt(key)+1)+")>a.btnAppear").html());
												
		}
		
	});
	
	var case_box;
	
	for (var key in cases_data){
		$("#cases").loadTemplate($("#template"),cases_data[key],{append:true});
		//$("#cases").append(case_box);
		
		at_pos.push(0);
	}
	
	$("#cases>div.case-section").each(function(key,element){

		//assign pics
		var pics = cases_data[key]["bg_url"];
		var id_base = cases_data[key]["img_id"];
		var pic;
		for (var i in pics){
			pic = $("<img />").addClass("case-bg").attr("width","100%").attr("id",id_base+i).attr("src",pics[i]).css("left",(i*100)+"%");
			$(element).children("div.img-box").append(pic);
		}
		
		
		
		//blur the description bg
		var img_id, canvas_id;
		$(element).find("img.case-bg:nth-child(1)").load(function(){
			img_id = $(this).attr("id");
			//console.log($(this).parent().find("canvas.case-blur_canvas").html());
			canvas_id = $(this).parent().parent().find("canvas.case-blur_canvas").attr("id");
			//console.log(img_id+"::"+canvas_id);
			stackBlurImage(img_id,canvas_id,BLUR_RADIUS,true);
			$(this).parent().parent().children("div.case-description_bg").height($(this).parent().parent().children("div.case-description").outerHeight());
			//$("#about>.description_bg").css("left",$("#about>.description").position().left);
			//console.log("top:"+$(this).parent().children("div.case-description").position().top);
			$(this).parent().parent().children("div.case-description_bg").css("top",$(this).parent().parent().children("div.case-description").position().top);
			$(this).parent().parent().find("canvas.case-blur_canvas").css("top",-1*$(this).parent().parent().children("div.case-description").position().top);
		});
		
		$(element).find("a.btnHide").click(function(){
			
			$(this).parent().parent().children("div.case-description_bg").fadeOut();
			$(this).parent().fadeOut();
			
			//place appear button
			$(this).parent().parent().children("a.btnAppear").fadeIn();
		});
		
		$(element).find("a.btnAppear").click(function(){
			$(this).fadeOut();
			$(this).parent().children("div.case-description").fadeIn();
			$(this).parent().children("div.case-description_bg").fadeIn();
		});
		
		//Register prev. and next. button actions
		$(element).find("a.btnNext").click(function(){
			//next pic
			//console.log($(this).parent().children("div.img-box"));
			//$(this).parent().children("div.img-box").scrollLeft($(this).parent().children("div.img-box").scrollLeft()+$(this).parent().children("div.img-box").width());
			
			canvas_id = $(element).find("canvas.case-blur_canvas").attr("id");
			description_box = $(element).find("div.case-description");
			
			$(this).parent().children("div.img-box").animate({scrollLeft:"+="+$(this).parent().children("div.img-box").width()},{
				duration:500,
				complete:function(){
					//console.log("key is "+at_pos[key]);
					if (at_pos[key] < cases_data[key]["bg_url"].length){
						//TODO:fix jump after blur problem
						img_id = $(element).find("img.case-bg:nth-child("+(at_pos[key]+1)+")").attr("id");
						stackBlurImage(img_id,canvas_id,BLUR_RADIUS,true);
						$("#"+canvas_id).fadeIn("fast");
						$(description_box).fadeIn("fast");
					}
				}
			});
			at_pos[key]+=1;
			if (at_pos[key] >= cases_data[key]["bg_url"].length){
				at_pos[key] = cases_data[key]["bg_url"].length-1;
			} else {
				//have to re-blur new pic
				
				$(description_box).fadeOut("fast");
				$("#"+canvas_id).fadeOut("fast");
			}
			
		});
		
		$(element).find("a.btnPrev").click(function(){
			//prev pic
			//$(this).parent().children("div.img-box").scrollLeft($(this).parent().children("div.img-box").scrollLeft()-$(this).parent().children("div.img-box").width());
			
			canvas_id = $(element).find("canvas.case-blur_canvas").attr("id");
			description_box = $(element).find("div.case-description");
			
			$(this).parent().children("div.img-box").animate({scrollLeft:"-="+$(this).parent().children("div.img-box").width()},{
				duration:500,
				complete:function(){
					//console.log("key is "+at_pos[key]);
					if (at_pos[key] > 0){
						//TODO:fix jump after blur problem
						img_id = $(element).find("img.case-bg:nth-child("+(at_pos[key]+1)+")").attr("id");
						stackBlurImage(img_id,canvas_id,BLUR_RADIUS,true);
						$("#"+canvas_id).fadeIn("fast");
						$(description_box).fadeIn("fast");
					}
				}
			});
			at_pos[key]-=1;
			if (at_pos[key] < 0){
				at_pos[key] = 0;
			} else {
				//have to re-blur new pic
				$(description_box).fadeOut("fast");
				$("#"+canvas_id).fadeOut("fast");
				
			}
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
	
	//handle window resizing
	$(window).resize(function(){
		//need pause for performance?
		$("#about>.description_bg").hide();
		$("#about>.description").hide();
		
		$("#cases .case-description").hide();
		$("#cases .case-description_bg").hide();
		
		//re-position and resize blur bar
		$("#about>.description_bg").height($("#about>.description").outerHeight());
		//$("#about>.description_bg").css("left",$("#about>.description").position().left);
		$("#about>.description_bg").css("top",parseInt($("#about>.description").css("top")));
		$("#about>.description_bg>canvas").css("top",-1*parseInt($("#about>.description").css("top")));
		
		$("#cases>div.case-section").each(function(key,element){
			//re-blur
			//img_id = $(element).find("img.case-bg:nth-child("+(at_pos[key]+1)+")").attr("id");
			//canvas_id = $(element).find("canvas.case-blur_canvas").attr("id");
			//$("#"+canvas_id).fadeOut("fast").fadeIn("fast");
			//stackBlurImage(img_id,canvas_id,BLUR_RADIUS,true);
			
			//re-position and resize blur bar
			$(element).children("div.case-description_bg").height($(element).children("div.case-description").outerHeight());
			$(element).children("div.case-description_bg").css("top",parseInt($(element).children("div.case-description").css("top")));
			$(element).find("canvas.case-blur_canvas").css("top",-1*parseInt($(element).children("div.case-description").css("top")));
		});
		
		clearTimeout(resize_timer);
		//re-blur the bar after 200ms
		resize_timer = setTimeout(resizeEnd, 50);
		
	});
	
});

function resizeEnd(){
	
	//re-blur
	stackBlurImage("bg_about","canvas_about",BLUR_RADIUS,true);
	$("#cases>div.case-section").each(function(key,element){
		//re-blur
		img_id = $(element).find("img.case-bg:nth-child("+(at_pos[key]+1)+")").attr("id");
		canvas_id = $(element).find("canvas.case-blur_canvas").attr("id");
		stackBlurImage(img_id,canvas_id,BLUR_RADIUS,true);
	});
	
	$("#about>.description_bg").fadeIn();
	$("#about>.description").fadeIn();
	
	$("#cases .case-description").fadeIn();
	$("#cases .case-description_bg").fadeIn();
}