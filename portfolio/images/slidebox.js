// JavaScript Document
var at=0;
var counts = $('.slides').children().length;
var dot_width = 20;
var dot_between = 20;
var dots_width = dot_width*counts+dot_between*(counts-1);
var i = 0;




function slidebox_init(){
	var indicator = $('<div></div>').addClass('indicator');
	var nextprev = $('<div></div>').addClass('nextprev');
var previous = $('<div></div>').addClass('arrow_previous').append('<a href="#" onclick="return slidePrevious();"></a>');
var next = $('<div></div>').addClass('arrow_next').append('<a href="#" onclick="return slideNext();"></a>');

at=0;
i=0;
counts = $('.slides').children().length;
dots_width = dot_width*counts+dot_between*(counts-1);

$('.slides').css('width', slide_width);
$('.slides').css('height', slide_height);

$(indicator).css('width',slide_width);
//$('.indicator').css('height',slide_width);

$('.slidebox').append(indicator);
$(indicator).append(nextprev);
$(nextprev).append(previous).append(next);

$('.slidebox').mouseover(function (){
								   $(this).find('.nextprev').stop();
								   $(this).find('.nextprev').fadeTo(500,1);
								   });
$('.slidebox').mouseout(function (){
								  $(this).find('.nextprev').stop();
								  $(this).find('.nextprev').fadeTo(500,0);
								  });

$('.slides').children('.slide').each(initial_slides);
}

function initial_slides(index){
	//append indicator and assign positons
	
	$(this).css('left',index*slide_width);
	//console.log("height"+$(this).height());
	var dot = $('<div></div>').addClass('dot').css('left',(slide_width-dots_width)/2+index*(dot_width+dot_between)).append('<a href="#" onclick="return slideTo('+index+');">');
	$(".indicator").append(dot);
	
	if (index == at){
		dot.children('a').css('background-image','url(images/indicator_active2.png)');
		dot.children('a').hover(function(){ $(this).css('background-image','url(images/indicator_over2.png)');}, function(){ $(this).css('background-image','url(images/indicator_active2.png)');});
	}
	console.log("height"+$(this).height());
}





function slideTo(num){
	
	$('div.slides').animate({scrollLeft:num*slide_width},{duration:500});
	at=num;
	$('.indicator').children('.dot').each(function(index){
												   if (index == at){
													   $(this).children('a').css('background-image','url(images/indicator_active2.png)');
													   $(this).children('a').hover(function(){ $(this).css('background-image','url(images/indicator_over2.png)');}, function(){ $(this).css('background-image','url(images/indicator_active2.png)');});
												   } else {
													   $(this).children('a').css('background-image','url(images/indicator_normal2.png)');
													   $(this).children('a').hover(function(){ $(this).css('background-image','url(images/indicator_over2.png)');}, function(){ $(this).css('background-image','url(images/indicator_normal2.png)');});
												   }});
	return false;
}

function slideNext(){
	at++;
	if (at == counts){
		at = 0;
	}
	slideTo(at);
	return false;
}

function slidePrevious(){
	at--;
	if (at == -1){
		at = counts-1;
	}
	slideTo(at);
	return false;
}
