//var works = [{quote:"flash prototype for TV BD player",link:"prototype_navi.jpg"},{quote:"flash prototype for TV BD player",link:"prototype_navi2.jpg"},{quote:"flash prototype for TV BD player",link:"prototype_navi3.jpg"},{quote:"flash prototype for TV BD player",link:"prototype_navi4.jpg"},{quote:"flash prototype for asus OPlay",link:"prototype_dora1.jpg"},{quote:"flash prototype for asus OPlay",link:"prototype_dora2.jpg"},{quote:"flash prototype for asus OPlay",link:"prototype_dora3.jpg"},{quote:"flash prototype for home security TV program",link:"prototype_mavis1.jpg"},{quote:"flash prototype for home security TV program",link:"prototype_mavis2.jpg"},{quote:"flash prototype for home security TV program",link:"prototype_mavis3.jpg"},{quote:"flash prototype for TV player indexing",link:"prototype_alice1.jpg"},{quote:"flash prototype for TV player indexing",link:"prototype_alice2.jpg"},{quote:"flash prototype for android tablet",link:"prototype_icecream.jpg"},{quote:"flash prototype for android TV concept",link:"prototype_alice.jpg"}];

var drawInterval;
var mousePos;

var slide_width = 600;
var slide_height = 400;
var ww = 600;

var cate_items_data;

var prev_case;

//{abs:"mobiapps",quote:"mobile app for retail saler and small biz",link:"mobiapps_thumb.png",photos:["touchbook1.png","touchbook2.png","touchbook3.png","mobiapps1.png","mobiapps2.png","mobiapps4.png","mobiapps6.png","mobiapps7.png"]}
var works = [{abs:"mobiapps",quote:"mobile app for retail saler and small biz",link:"mobiapps_thumb.png",photos:["mobiapps1.png","mobiapps2.png","mobiapps4.png","mobiapps6.png","mobiapps7.png"]}
			,{abs:"clocky",quote:"Clocky, the year clock and clock UI concept",link:"clocky_thumb.png",photos:["clocky1.png","clocky2.png","clockyui.png"],height:450}
			,{abs:"mobi",quote:"The official site of MobiApps co.",link:"mobi_thumb.png",photos:["mobi1.png","mobi2.png","mobi3.png"],height:450}
			,{abs:"mcbw",quote:"design and implement for pilotfish mcbw website, program guide and invitation",link:"mcbw_thumb.png",photos:["mcbw1.png","mcbw2.png","mcbw4.png"],height:450}
			
			,{abs:"pf_mobile",quote:"wireframe and prototype for pilotfish mobile website",link:"pf_mobile_thumb.png",photos:["pf_mobile1.png","pf_mobile2.png","pf_mobile3.png","pf_mobile4.png"],height:450}
			,{abs:"ges_player",quote:"prototype for gesture player concept on android platform",link:"prototype_gesture_thumb.jpg",photos:["prototype_gesture1.jpg","prototype_gesture2.jpg","prototype_gesture3.jpg"]}
			,{abs:"graphics",quote:"graphic works. graphic design make informations visualized",link:"graphic_thumb.jpg",photos:["einladung-topf.jpg","einladung_ice_cave.jpg","ymulogo.jpg","court.jpg","wh_poster.jpg","party_buttons.jpg"],height:500,width:400}
			,{abs:"skype_tv",quote:"flash prototype for TV mediaplay and skype",link:"prototype_skype_thumb.jpg",photos:["prototype_skype1.jpg","prototype_skype2.jpg","prototype_alice1.jpg","prototype_alice2.jpg"]}
			,{abs:"models",quote:"cultural model for BD player",link:"usability_BD_thumb.jpg",photos:["usability_BD.jpg"]}
			,{abs:"usability",quote:"user testing, heuristic inspection and usability lab planning",link:"usability_procedure_thumb.jpg",photos:["usability_procedure.jpg","usability_lab.png"]}
			,{abs:"ddd",quote:"arduino prototype and iPhone app for diabetes food weighting system",link:"ddd_thumb.png",photos:["ddd_3.png","ddd_2.png","ddd_1.png"],height:450}
			,{abs:"ar",quote:"AR practice",link:"techart_ar_thumb.jpg",photos:["techart_ar.jpg"]}
			,{abs:"wii",quote:"Wii multi-touch simulation",link:"techart_mt_thumb.jpg",photos:["techart_mt2.jpg","techart_mt.jpg"]}
			,{abs:"diwo",quote:"DIWO Culture - connection, three tutor show / broken wonderland",link:"techart_connection_thumb.jpg",photos:["techart_connection2.jpg","techart_connection1.jpg","techart_connection3.jpg","techart_HONF3.jpg","techart_HONF2.jpg","techart_HONF1.jpg"]}
			,{abs:"papers",quote:"PaPer's site - the joyful playground",link:"web_papersite_thumb.jpg",photos:["web_papersite1.jpg","web_papersite2.jpg"]}
			,{abs:"jptrc",quote:"Web-base database design for BME and JPTRC in Yang-Ming University",link:"web_jptrc_thumb.jpg",photos:["web_jptrc1.jpg"]}];

//var categories = [{name:"prototype",color:"#30c"},{name:"usability",color:"#0f6"},{name:"tech-fun",color:"#F09"},{name:"web",color:"#0ff"}];

var works_des = [
				"<h3>MobiApps</h3><p>In end of 2012, I joined the joyful team MobiApps to lead the UX and UI design. We server the mobile app for retail sale and small business. With rapid design pattern, the mobile app can be prompt built and delivered. The flexibility of the team allowed me to break out serveral concepts including smart no-content mode, social biz UI, etc.. Still, I used variable tools like Dropbox or TAP to rapidly test new concept.</p>"
				,"<h3>Clocky</h3><p><a href='http://paperli.zzl.org/clocky/' target='_blank'>http://paperli.zzl.org/clocky/</a></p><p>The Clocky is inspired by The Present, the successful funded Kickstarter project. The Clocky shows the time in day and date in year. The outer most ring displayed as gradient color ring and represents the color for seasons. The hands of date, hour and minute are distort-able and better describe the always-change life. In tech. term, it is totally built with HTML5 canvas, no more flash.</p><p>The third pic represents the concept of clock UI. The idea is to create a new way to manipulate the time. The users can adjust the time by turning around the hour hand and minute hand on the clock and the thread/timeline of personal social messages will be changed seamlessly.</p>"
				,"<h3>MobiApps</h3><p><a href='http://mobiapps.github.com/' target='_blank'>http://www.themobiapps.com/</a></p><p>TheMobiApps, the mobile app start-up in Taiwan, was planning to build the company identify prior to media publishing. I designed the whole new website with the 4 key colors in the company logo. The website consisted of the touch keys in present design trend, one-page scroll, simple and html5. It is planned to publish in March, 2013.</p>"
				,"<h3>Pilotfish MCBW event</h3><p><a href='http://www.pilotfish.eu/mcbw/' target='_blank'>http://www.pilotfish.eu/mcbw/</a></p><p>The big innovation event in Munich! Munich Creative Business Week. I designed a webpage to present speech schedule in Pilotfish booth. <b>It's all about time!</b> The main part of this design is the time-line and the blobs of speakers. As requesed also made the pdf version and invitation card.</p>"
				,"<h3>Pilotfish mobile website</h3><p>In aspect of usability, website is suggested to redesign for mobile phone. The different interaction pattern  and smaller screen are the major challenges. I designed the wireframe of Pilotfish mobile website. For test purpose I also made the interactive prototype in HTML and it was tested in mobile phone.</p>"
				,"<h3>Gesture Player on the Phone</h3><p>Touch screen in smart phone creates new generation of interaction. I designed three simple gestures to play(triangle), stop(square), switch(cross) song and made the app in Android phone to prove the concept.</p>"
				,"<h3>Graphics in life</h3><p>Designer got ideas from daily life. both for fun and practice, I worked out several posts for private or company events.</p><p>The 3rd image is the logo design of National Yang-Ming University. With it I was winning the stunning award in the competition.<p>The 4th image is still in progress and suppose I will bring it in the competition which is held by Judicial Yuan.</p></p>"
				,"<h3>TV On</h3><p>Since iPhone arrival, it become a trade making everything with SMART. Smart TV is one of this. The remote control interaction and 10-feet lean-back experience are the big challenges. With the design team in KatDC, we tested out and create the user experience in several TV applications, Skype, Media player, Blu-ray Player, Interactive Internet TV, etc.. With my creation of simulation environment of TV, we had chance to \"EXPERIENCE\" the design in realtime. It is the extreme important key in successful design procedure.</p>"
				
				,"<h3>Work Models</h3><p>Designers are not users are not designers. WIth this golden rule, observation plays the heavy role in User-Centric Design. Work models are used to \"translate\" text-based raw data to visual. There are five models. Physical model for physical set-up, Cultural model for explanation of connection of culture, Artifact model for knowing how user interact with objects, Flow model for connection of people and surrounding and Sequence model for explanation of work flow. Designer can find the break point through these models and design user experience.</p>"
				,"<h3>Usability assessment</h3><p>Designers are not users are not designers. User test, Heuristic inspection, Contextual Inquiry, these methodology assist designer to SEE what the user needs, not to THINK. With experience of usability engineer in KatDC, I conducted several usability study and suggested design iteration for designers. I also defined and planned the basic procedure and usability lab in KatDC.</p>"
				,"<h3>Diabetes food weighting system</h3><p>I am very glad to join in this project because of my education background of Biomedical engineering. The project help diabetes patient to calculate the injection amount. I am in charge in making a prototype to weight the food and the app in iPhone to do calculation with weighted data. I used Arduino to connect with hacked electric scale and pass the data to online server. The app in iPhone gets the data from internet and dose calculation.</p>"
				,"<h3>AR Kat</h3><p>AR is the super cool technology for extending the \"static\" world. This work is not only the practice of ARToolKit, but also the 3D modeling in Blender. And if you see the video carefully, you shall find that virtual Kat also appeared on iPod touch. It's a trick of making virtual thing form reality on virtual screen.</p>"
				,"<h3>Wii Multi-touch</h3><p>The low-cost multi-touch environment is made with wii remoter and IR pens. I also rewrite the ActionScript 2-based library to ActionScrpt 3 and made a map application for testing.</p>"
				,"<h3>DIWO Cuture</h3><p>DIWO culture is the workshop hold by playground, the tech-art team in Taiwan. In 5 days workshop, I was teaching assistant in the secession \"Generic Infrastructures Community and Tools.\" I worked with two other TAs and made the final project about \"NO-TECH\" connection board. We made a timeline and people can nail where were they and what did they do in it.</p>"
				,"<h3>PaPers Site</h3><p>I LOVE HTML! My website is my playground for ideas, interaction and of course presenting of myself. Current site is the third edition of major upgrade.</p>"
				,"<h3>Jointer Center Database System</h3><p>As I was master student in Yang-Ming university in Taipei, I built a system that help researchers in joint-replace center to collect, inspect and store the patient data. It was built on PHP and MySQL database.</p>"];

var clicking = function(){
	var limit = -1;
	//console.log($(this).attr("id"));
	var showroom = $("<div></div>").attr("id","showroom");
	//console.log($("#showroom").css("height"));
	
	var hh = works[parseInt($(this).attr("id"),10)].height?works[parseInt($(this).attr("id"),10)].height:slide_height;
	
	var ww = works[parseInt($(this).attr("id"),10)].width?works[parseInt($(this).attr("id"),10)].width:slide_width;
	
	
	if ($(this).attr("id") == "11"){
		showroom.append("<object width='600' height='400'><param name='movie' value='http://www.youtube.com/v/LP5pshZcQpU?fs=1&amp;hl=en_US&amp;color1=0x3a3a3a&amp;color2=0x999999'></param><param name='allowFullScreen' value='true'></param><param name='allowscriptaccess' value='always'></param><embed src='http://www.youtube.com/v/LP5pshZcQpU?fs=1&amp;hl=en_US&amp;color1=0x3a3a3a&amp;color2=0x999999' type='application/x-shockwave-flash' allowscriptaccess='always' allowfullscreen='true' width='600' height='400'></embed></object>").width(600).height(400);
		showroom.css('top',($(window).height()-showroom.height())/2).css('left',($(window).width()-showroom.width())/2).css('padding-bottom',10);
		$.address.value("/?case="+works[parseInt($(this).attr("id"),10)].abs);
		prev_case = parseInt($(this).attr("id"),10);
		//alert($.address.parameter('case'));
	} else {
		
		//rewrite the url
		$.address.value("/?case="+works[parseInt($(this).attr("id"),10)].abs);
		prev_case = parseInt($(this).attr("id"),10);
		//alert($.address.parameter('case'));
		
		//console.log(hh);
		if (works[parseInt($(this).attr("id"),10)].photos.length > 1){
			hh += 46;
		}
		
		
		var loading = $("<div></div>").addClass("loading");
		showroom.append(loading).css('top',($(window).height()-showroom.height())/2).css('left',($(window).width()-showroom.width())/2);
		//showroom.width(50).height(50);
		//var pics = "<div class='slidebox' id='slidebox'><div class='slides'>";
		var slidebox = $("<div></div>").addClass("slidebox").attr("id","slidebox").hide();;
		var slides = $("<div></div>").addClass("slides").show();
		var temp;
		limit = works[parseInt($(this).attr("id"),10)].photos.length;
		//showroom.width(100).height(100).css('top',($(window).width()-100)/2).css('left',($(window).height()-100)/2);
		
		for (var i=0; i<works[parseInt($(this).attr("id"),10)].photos.length;i++){
			temp = $("<div></div>").addClass("slide");
			temp_pic = $("<img></img>").attr('width',ww).attr("src","images/"+works[parseInt($(this).attr("id"),10)].photos[i]);
			temp.append(temp_pic);
			temp_pic.bind('load',function(){ 
				limit--;
				if (limit==0){
					//loading completed!
					slides.show();
					showroom.animate({top:($(window).height()-hh-parseInt(showroom.css('padding-top'),10))/2,
										left:($(window).width()-ww)/2,
										width:ww, height:hh},500,function(){
											slidebox.hide().fadeIn(300);
										});
					//showroom.animate({width:$('.slides').width(),height:$('.slides').height()},500);
					//slides.delay(1000).slideDown("slow");
					loading.fadeOut(); 
				} 
			});
			slides.append(temp);
			//pics += "<div class='slide'><img width='600' src='images/"+works[parseInt($(this).attr("id"),10)].photos[i]+"' /></div>";
		}
		
		html = "<h3>CASE NAME</h3><p>case description</p>";
		//alert($(".slide>div").css("marginLeft"));
		des_content = $("<div></div>").addClass("case_des").width(ww-40).html(works_des[parseInt($(this).attr("id"),10)]); //margin: 10px*2
		des = $("<div></div>").addClass("slide").append(des_content);
		slides.append(des);
		
		
		//slides.height(temp_pic.height());
		slides.hide();
		slidebox.append(slides);
    	//pics += "</div></div>";
		//var picsj = $(pics);
		//picsj.hide();
		//picsj.bind('load',function(){ console.log("let's go"); $(this).fadeIn(); });
		showroom.append(slidebox);
		//showroom.hide();
		//showroom.bind('load',function(){ console.log("let's go"); $(this).fadeIn(); });
	}
	
	var bigbox = $("<div></div>").css("height",$(window).height()).attr("id","bigbox");
	bigbox.click(hideBigbox);
	$("body").append(bigbox);
	$("body").append(showroom);
	
	$('.slides').width(ww).height(hh);
	
	//$('.slides').height($('.slide').height());
	//console.log('bb'+$('.slide').height());
	/*if (works[parseInt($(this).attr("id"),10)].photos.length > 1){
		hh += 46; // indicator height 46
	}*/
	//showroom.css("top",($(window).height()-hh-parseInt(showroom.css('padding-top'),10))/2).css("left",($(window).width()-ww)/2);
	
	if (works[parseInt($(this).attr("id"),10)].photos.length > 0){
		slidebox_init(ww);
		
	}
	
	return false;
}

function showCase(caseid){
	
	var cid = caseid;

	var limit = -1;
	//console.log($(this).attr("id"));
	var showroom = $("<div></div>").attr("id","showroom");
	//console.log($("#showroom").css("height"));
	
	var hh = works[cid].height?works[cid].height:slide_height;
	
	var ww = works[cid].width?works[cid].width:slide_width;
	
	if (cid == "11"){
		showroom.append("<object width='600' height='400'><param name='movie' value='http://www.youtube.com/v/LP5pshZcQpU?fs=1&amp;hl=en_US&amp;color1=0x3a3a3a&amp;color2=0x999999'></param><param name='allowFullScreen' value='true'></param><param name='allowscriptaccess' value='always'></param><embed src='http://www.youtube.com/v/LP5pshZcQpU?fs=1&amp;hl=en_US&amp;color1=0x3a3a3a&amp;color2=0x999999' type='application/x-shockwave-flash' allowscriptaccess='always' allowfullscreen='true' width='600' height='400'></embed></object>").width(600).height(400);
		showroom.css('top',($(window).height()-showroom.height())/2).css('left',($(window).width()-showroom.width())/2).css('padding-bottom',10);
		$.address.value("/?case="+works[cid].abs);
		//alert($.address.parameter('case'));
	} else {
		
		//rewrite the url
		$.address.value("/?case="+works[cid].abs);
		//alert($.address.parameter('case'));
		
		//console.log(hh);
		if (works[cid].photos.length > 1){
			hh += 46;
		}
		
		
		var loading = $("<div></div>").addClass("loading");
		showroom.append(loading).css('top',($(window).height()-showroom.height())/2).css('left',($(window).width()-showroom.width())/2);
		//showroom.width(50).height(50);
		//var pics = "<div class='slidebox' id='slidebox'><div class='slides'>";
		var slidebox = $("<div></div>").addClass("slidebox").attr("id","slidebox").hide();;
		var slides = $("<div></div>").addClass("slides").show();
		var temp;
		limit = works[cid].photos.length;
		//showroom.width(100).height(100).css('top',($(window).width()-100)/2).css('left',($(window).height()-100)/2);
		
		for (var i=0; i<works[cid].photos.length;i++){
			temp = $("<div></div>").addClass("slide");
			temp_pic = $("<img></img>").attr('width',ww).attr("src","images/"+works[cid].photos[i]);
			temp.append(temp_pic);
			temp_pic.bind('load',function(){ 
				limit--;
				if (limit==0){
					//loading completed!
					slides.show();
					showroom.animate({top:($(window).height()-hh-parseInt(showroom.css('padding-top'),10))/2,
										left:($(window).width()-ww)/2,
										width:ww, height:hh},500,function(){
											slidebox.hide().fadeIn(300);
										});
					//showroom.animate({width:$('.slides').width(),height:$('.slides').height()},500);
					//slides.delay(1000).slideDown("slow");
					loading.fadeOut(); 
				} 
			});
			slides.append(temp);
			//pics += "<div class='slide'><img width='600' src='images/"+works[parseInt($(this).attr("id"),10)].photos[i]+"' /></div>";
		}
		
		html = "<h3>CASE NAME</h3><p>case description</p>";
		//alert($(".slide>div").css("marginLeft"));
		des_content = $("<div></div>").addClass("case_des").width(ww-40).html(works_des[cid]); //margin: 10px*2
		des = $("<div></div>").addClass("slide").append(des_content);
		slides.append(des);
		
		
		//slides.height(temp_pic.height());
		slides.hide();
		slidebox.append(slides);
    	//pics += "</div></div>";
		//var picsj = $(pics);
		//picsj.hide();
		//picsj.bind('load',function(){ console.log("let's go"); $(this).fadeIn(); });
		showroom.append(slidebox);
		//showroom.hide();
		//showroom.bind('load',function(){ console.log("let's go"); $(this).fadeIn(); });
	}
	
	var bigbox = $("<div></div>").css("height",$(window).height()).attr("id","bigbox");
	bigbox.click(hideBigbox);
	$("body").append(bigbox);
	$("body").append(showroom);
	
	$('.slides').width(ww).height(hh);
	
	//$('.slides').height($('.slide').height());
	//console.log('bb'+$('.slide').height());
	/*if (works[parseInt($(this).attr("id"),10)].photos.length > 1){
		hh += 46; // indicator height 46
	}*/
	//showroom.css("top",($(window).height()-hh-parseInt(showroom.css('padding-top'),10))/2).css("left",($(window).width()-ww)/2);
	
	if (works[cid].photos.length > 0){
		slidebox_init(ww);
		
	}
	
	return false;
}

var hideBigbox = function(){
	$(this).remove();
	$("#showroom").remove();
	$.address.value("/");
	prev_case = -1;
}

var canvas;
var context;
var cpt;
var end_pt = {x:0,y:0};
var endpt_interval;
var init_time = 0;

function set_end_pt(){
	if (Math.floor(init_time/(5*100))%2 == 0){
		end_pt = {x:50,y:($(window).height()/2)};
	} else {
		end_pt = {x:0,y:0};
	}
}

function init_draw(){
	init_time++;
	canvas.width = canvas.width;
	
	//mousePos = getMousePos(canvas,evt);
	cpt.x += (end_pt.x-cpt.x)*0.01;
	cpt.y += (end_pt.y-cpt.y)*0.01;
	
	context.beginPath();
	context.moveTo(0,0);
	context.quadraticCurveTo(cpt.x,cpt.y,0,canvas.height);
	context.lineTo(canvas.width,canvas.height);
	context.lineTo(canvas.width,0);
	context.closePath();
	
	context.fillStyle = "#fff";
	context.fill();
}

$(function(){
	//init
	
	var abss = [];
	for (var aa=0; aa<works.length; aa++){
		abss.push(works[aa].abs);
	}
	
	prev_case = abss.indexOf($.address.parameter("case"));
	
	if (prev_case > -1){
		showCase(prev_case);
	} else {
		$("#bigbox").remove();
		$("#showroom").remove();
	}
	
	$.address.externalChange(function(){
		var case_id = abss.indexOf($.address.parameter("case"));
		//console.log(prev_case);
		if (prev_case != case_id){
			if (case_id > -1){
				$("#bigbox").remove();
				$("#showroom").remove();
				//alert($("#bigbox"));
				showCase(case_id);
			} else {
				$("#bigbox").remove();
				$("#showroom").remove();
				//$.address.value("/");
			}
		}
		
		prev_case = case_id;
	});
	
	/* //Draw the hint banner to CV
	canvas = document.getElementById("banner");
	//alert($.browser.msie + parseInt($.browser.version,10));
	if (!($.browser.msie && parseInt($.browser.version,10)<9)){
		
		context = canvas.getContext("2d");
		canvas.height = $(window).height();
		cpt = {x:0,y:canvas.height/2};
	
		context.beginPath();
		context.moveTo(0,0);
		context.lineTo(0,$(window).height());
		context.lineTo(100,$(window).height());
		context.lineTo(100,0);
		context.closePath();
		context.fillStyle = "#fff";
		context.fill();
		
		endpt_interval = setInterval(set_end_pt,100);
		drawInterval = setInterval(init_draw,10);
		$("a#banner_toCV").hover(curving,flatting);
	} else {
		canvas.style.display = "none";
		$("a#banner_toCV").css("backgroundColor","#ffffff");
		$("a#close_banner").click(function(){
			$(this).hide(100);
			$("div#html5_banner").hide(100);
		});
	}
	$(window).resize(function(){
		canvas.height = $(window).height();
	});*/
	
	
	
	$("body").hide().css('backgroundColor','#000').fadeIn(1000);
	$("a#link_toCV").click(function(event){
    	event.preventDefault();
    	linkLocation = this.href;
    	$("body").fadeOut(500, function() {
        	window.location = linkLocation;
    	});
	});
	
	//redering showcase
	for (var i=0;i<works.length;i++){
		var img = $("<img></img>").attr("src","images/"+works[i].link);
		var fg = $("<img></img>").attr("id","fg").attr("src","images/icon_bg2.png");
		var fg_over = $("<img></img>").attr("id","fg").attr("src","images/icon_bg.png").css("display","none");
		var a = $("<a></a>").attr("id",i).attr("href","#").attr("quote",works[i].quote).append(img).append(fg);
		var work = $("<div></div>").addClass("item").append(a).css("top",Math.floor(i/8)*100).css("left",(i%8)*100);
		$("#works").append(work);
		$(work).delay(1000*Math.random()).slideDown("slow");
		$(work).hover(handIn,handOut).mousemove(handover);
		$(a).click(clicking);
	}
	
	//fix #works box height
	$("#works").height(100+Math.floor((i-1)/8)*100);
	
	
	$("#links").hide().delay(70).slideDown('slow','easeInOutQuint').animate({height:30},800,'easeInQuint');
	
	$("#aboutme").delay(50).slideDown('slow','easeInOutQuint').animate({height:40},800,'easeInQuint',function(){
		$(this).css("background-color","transparent");
	});
	$("#aboutme").hover(handin_link,handout_link);
	$("#prototype").delay(100).slideDown('slow','easeInOutQuint').animate({height:40},800,'easeInQuint',function(){
		$(this).css("background-color","transparent");
	});
	$("#prototype").hover(show_prototype,hide_prototype);
	$("#usability").delay(300).slideDown('slow','easeInOutQuint').animate({height:40},800,'easeInQuint',function(){
		$(this).css("background-color","transparent");
	});
	$("#usability").hover(show_usability,hide_usability);
	$("#techart").delay(500).slideDown('slow','easeInOutQuint').animate({height:40},800,'easeInQuint',function(){
		$(this).css("background-color","transparent");
	});
	$("#techart").hover(show_techart,hide_techart);
	$("#web").delay(700).slideDown('slow','easeInOutQuint').animate({height:40},800,'easeInQuint',function(){
		$(this).css("background-color","transparent");
	});
	$("#web").hover(show_web,hide_web);
	$("#mail").delay(750).slideDown('slow','easeInOutQuint').animate({height:40},800,'easeInQuint',function(){
		$(this).css("background-color","transparent");
	});
	$("#mail").hover(handin_link,handout_link);
	
	//save category items' position and size info
	cate_items_data = {
		"aboutme":[parseInt($("#aboutme").css("left"),10),$("#aboutme").width(),parseInt($("#aboutme").css("padding-left"),10),false],
		"prototype":[parseInt($("#prototype").css("left"),10),$("#prototype").width(),parseInt($("#prototype").css("padding-left"),10),false],
		"usability":[parseInt($("#usability").css("left"),10),$("#usability").width(),parseInt($("#usability").css("padding-left"),10),false],
		"techart":[parseInt($("#techart").css("left"),10),$("#techart").width(),parseInt($("#techart").css("padding-left"),10),false],
		"web":[parseInt($("#web").css("left"),10),$("#web").width(),parseInt($("#web").css("padding-left"),10),false],
		"mail":[parseInt($("#mail").css("left"),10),$("#mail").width(),parseInt($("#mail").css("padding-left"),10),false]
	};
	
	//console.log(cate_items_data);
	
	/*for (var c=0;c<categories.length;c++){
		var cate = $("<div></div>").attr("id",categories[c].name).addClass("category_unit").append(categories[c].name);
		$("#category").append(cate);
	}*/
	
	$("#timeline").makeFloating();
	
	//masking of footer
	if ($.browser.webkit){
		$(".colorme").hover(startMask,stopMask);
		$(".colorme").mousemove(placeMask);
	}
	
	//render the big arrow between timeline and portfolio
	$(".big_arrow").css("border-right-width",$(window).width()/2).css("border-left-width",$(window).width()/2);
	$(window).resize(function(){
		$(".big_arrow").css("border-right-width",$(window).width()/2).css("border-left-width",$(window).width()/2);
	});
});

function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect(), root = document.documentElement;

        // return relative mouse position
        var mouseX = evt.clientX - rect.left - root.scrollLeft;
        var mouseY = evt.clientY - rect.top - root.scrollTop;
        return {
          x: mouseX,
          y: mouseY
        };
      }



function curving(evt){
	//alert("in");
	clearInterval(drawInterval);
	canvas.width = canvas.width;
	
	mousePos = getMousePos(canvas,evt);
	cpt.x += (mousePos.x-cpt.x)*0.05;
	cpt.y += (mousePos.y-cpt.y)*0.05;
	
	context.beginPath();
	context.moveTo(0,0);
	context.quadraticCurveTo(cpt.x,cpt.y,0,canvas.height);
	context.lineTo(canvas.width,canvas.height);
	context.lineTo(canvas.width,0);
	context.closePath();
	
	context.fillStyle = "#fff";
	context.fill();
	
	drawInterval = setInterval(draw,1);
	document.getElementById("banner_toCV").addEventListener("mousemove",update);
	
}

function update(evt){
	//alert("q");
	mousePos = getMousePos(canvas,evt);
}

function draw(){
	//cpt = {x:(100-cpt.x)*0.95/100,y:cpt.y};
	canvas.width = canvas.width;
	
	//mousePos = getMousePos(canvas,evt);
	
	cpt.x += (mousePos.x-cpt.x)*0.05;
	cpt.y += (mousePos.y-cpt.y)*0.05;
	
	context.beginPath();
	context.moveTo(0,0);
	context.quadraticCurveTo(cpt.x,cpt.y,0,canvas.height);
	context.lineTo(canvas.width,canvas.height);
	context.lineTo(canvas.width,0);
	context.closePath();
	
	context.fillStyle = "#fff";
	context.fill();
}

function flatting(evt){
	clearInterval(drawInterval);
	
	canvas.width = canvas.width;
	
	cpt.x += (0-cpt.x)*0.95/100;
	cpt.y += (0-cpt.y)*0.95/100;
	
	context.beginPath();
	context.moveTo(0,0);
	context.quadraticCurveTo(cpt.x,cpt.y,0,canvas.height);
	context.lineTo(canvas.width,canvas.height);
	context.lineTo(canvas.width,0);
	context.closePath();
	
	context.fillStyle = "#fff";
	context.fill();
	
	drawInterval = setInterval(drawFlat,10);
	document.getElementById("banner_toCV").removeEventListener("mousemove",update);
}

function drawFlat(evt){
	canvas.width = canvas.width;
	
	cpt.x += (0-cpt.x)*0.95/100;
	cpt.y += (0-cpt.y)*0.95/100;
	
	context.beginPath();
	context.moveTo(0,0);
	context.quadraticCurveTo(cpt.x,cpt.y,0,canvas.height);
	context.lineTo(canvas.width,canvas.height);
	context.lineTo(canvas.width,0);
	context.closePath();
	
	context.fillStyle = "#fff";
	context.fill();
}

//footer masking
function startMask(event){
	//console.log("i am in");
	//alert($(this).css("-webkit-mask-size"));
	$(this).parent().children(".monochrome").fadeTo(300,0.5);
	//$("#footer>.monochrome").fadeTo(300,0.5);
	
	$(this).css("backgroundImage","url(images/me-2_colour.png)");
	//$(this).css("-webkit-mask-size","200px");
	//$("#colorme").show();
	//$("#colorme").css("webkitMaskImage","url(../image/mask.png)");
	$(this).css("webkitMaskPosition",(event.pageX-$(this).offset().left-parseInt($(this).css("-webkit-mask-size"),10)/2)+"px "+(event.pageY-$(this).offset().top-parseInt($(this).css("-webkit-mask-size"),10)/2)+"px");
	//$("#footer").mousemove()
}

function placeMask(){
	$(this).css("webkitMaskPosition",(event.pageX-$(this).offset().left-parseInt($(this).css("-webkit-mask-size"),10)/2)+"px "+(event.pageY-$(this).offset().top-parseInt($(this).css("-webkit-mask-size"),10)/2)+"px");
}

function stopMask(){
	$(this).parent().children(".monochrome").fadeTo(300,1);
	//$("#footer>.monochrome").fadeTo(300,1);
	$(this).css("backgroundImage","none");
	//$("#colorme").hide();
	//$("#colorme").css("webkitMaskImage","none");
}

var handin_link = function(event){
	expand_option($(this));
}

var handout_link = function(event){
	shrink_option($(this));
}

var isExpanded = function(){
	//check if someone in menu is expanded
	var expanded = false;
	for (var i in cate_items_data){
		//console.log(i +"::"+ cate_items_data[i][3])
		if (cate_items_data[i][3] == true){
			expanded = true;
		}
	}
	return expanded;
}

var expand_option = function(obj){
	var fix = parseInt($(obj).children("a").css("paddingTop"),10);
	
	var delay_time = isExpanded()?200:1;
	
	$(obj).children("div.description").fadeIn(200);
	
	$(obj).stop(true,true).delay(delay_time).css("zIndex",99).animate({
		height:220+fix,
		width:800 - (cate_items_data[$(obj).attr("id")][2] + cate_items_data[$(obj).attr("id")][0]),
		left:0,
		paddingLeft: cate_items_data[$(obj).attr("id")][2] + cate_items_data[$(obj).attr("id")][0]
	},400,"easeInOutQuint",function(){
		$(this).css("zIndex",98);
		//$(this).children("p.group_text").fadeIn(200);
		
	});
	cate_items_data[$(obj).attr("id")][3] = true; //set expanded = true
}

var shrink_option = function(obj){
	
	//$(obj).children("p.group_text").fadeOut(200);
	$(obj).children("div.description").fadeOut(200);
	
	//var fix = parseInt($(obj).children("a").css("paddingTop"),10);
	$(obj).stop(true,true).animate({
		height:40,
		width:cate_items_data[$(obj).attr("id")][1],
		left:cate_items_data[$(obj).attr("id")][0],
		paddingLeft:cate_items_data[$(obj).attr("id")][2]
	},200,"easeInOutQuint",function(){
		$(this).css("zIndex",100);
		cate_items_data[$(obj).attr("id")][3] = false; //set expanded = false
	});
}

var show_prototype = function(event){
	expand_option($(this));
	//$("#prototype_group").slideDown(500);
}

var hide_prototype = function(event){
	shrink_option($(this));
	//$("#prototype_group").slideUp(200);
}

var show_usability = function(event){
	expand_option($(this));
	//$("#usability_group").slideDown(500);
}

var hide_usability = function(event){
	shrink_option($(this));
	//$("#usability_group").slideUp(200);
}

var show_techart = function(event){
	expand_option($(this));
	//$("#techart_group").slideDown(500);
}

var hide_techart = function(event){
	shrink_option($(this));
	//$("#techart_group").slideUp(200);
}

var show_web = function(event){
	expand_option($(this));
	//$("#web_group").slideDown(500);
}

var hide_web = function(event){
	shrink_option($(this));
	//$("#web_group").slideUp(200);
}

var handover = function(event){
	$("#bubble").css("left",event.pageX+10).css("top",event.pageY+10);
}

var handIn = function(event){
	
	var bubble = $("<div></div>").css("left",event.pageX+10).css("top",event.pageY+10).attr("id","bubble").append($(this).children("a").attr("quote"));
	$(this).find("#fg").attr("src","images/icon_bg.png");
	$("body").append(bubble);
}

var handOut = function(event){
	$("#bubble").remove();
	$(this).find("#fg").attr("src","images/icon_bg2.png");
}

function show_title(){
	
}

(function($){
	$.fn.makeFloating = function(){
		//alert($(this).attr("id"));
		var prev_pos;
		var prev_width;
		$(this).children(".clip").each(function(i){
			//console.log(i);
			if (i == 0){
				//the first item
				$(this).css("left",0);
				prev_pos = 0;
				prev_width = parseInt($(this).css("width"),10);
			} else {
				console.log(prev_pos + "::" + prev_width);
				$(this).css("left",prev_pos + prev_width);
				prev_pos = prev_pos + prev_width;
				prev_width = parseInt($(this).css("width"),10);
			}
		});
	}
})(jQuery);