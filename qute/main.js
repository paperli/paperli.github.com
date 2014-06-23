$(document).ready(function(){
	//alert($('div#content_box>div.banner').height()+$('div#content_box>div.banner').position().top+$('div#content_box>div.banner').position().bottom);
	//console.log('top'+$('div#content_box>div.banner').css('top'));
	//console.log('bot'+$('div#content_box>div.banner').css('bottom'));
	var image_pool = [];
	var image_index = 0;
	
	var imageShowRun = function(){
		//$(image_pool[image_index]).load(function(){
			var url = $(image_pool[image_index]).attr('src');
			$('div#content_box>div.bg1').delay(10000).fadeOut(5000,function(){
				$(this).css('backgroundImage',$('div#content_box>div.bg2').css('backgroundImage')).show();
			});
			$('div#content_box>div.bg2').css('backgroundImage','url('+url+')').delay(10000).fadeIn(5000,function(){
				$(this).hide();
				imageShowRun();
			});
			image_index++;
			image_index = (image_index<image_pool.length)?image_index:0;
		//});
		
	};
	
	$('div#content_box').height($('div#content_box>div.banner').height()+parseInt($('div#content_box>div.banner').css('top'))+parseInt($('div#content_box>div.banner').css('bottom')));
	$('div#content_box>div.bg1').height($('div#content_box').height());
	$('div#content_box>div.bg2').height($('div#content_box').height()).hide();
	$.ajax({url:"http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?&format=json&tags=qr%20code",dataType:'jsonp'})
		.done(function(data){
			console.log('success');
			console.log(data.items[0].media.m.replace('_m.','_b.'));
			var arr = data.items;
			//var temp;
			for (var i=0;i<arr.length;i++){
				image_pool.push($('<img />').attr('src',arr[i].media.m.replace('_m.','_b.')));
				
			}
			arr = null;
			imageShowRun();
		})
		.fail(function(){
			// Error withdraw
			//console.log('error');
		})
		.always(function(){
			// Completed
			//console.log('complete');
		});
});