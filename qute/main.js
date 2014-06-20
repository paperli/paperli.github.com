$(document).ready(function(){
	//alert($('div#content_box>div.banner').height()+$('div#content_box>div.banner').position().top+$('div#content_box>div.banner').position().bottom);
	//console.log('top'+$('div#content_box>div.banner').css('top'));
	//console.log('bot'+$('div#content_box>div.banner').css('bottom'));
	$('div#content_box').height($('div#content_box>div.banner').height()+parseInt($('div#content_box>div.banner').css('top'))+parseInt($('div#content_box>div.banner').css('bottom')));
	
});