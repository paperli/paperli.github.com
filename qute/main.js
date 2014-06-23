var image_pool = [];
var image_index = 0;

var flickrUrl = function(farm,server,id,secret){
	var str = 'https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_b.jpg';
	str = str.replace('{farm-id}',farm);
	str = str.replace('{server-id}',server);
	str = str.replace('{id}',id);
	str = str.replace('{secret}',secret);
	return str;
};

var imageShowRun = function(){
	//$(image_pool[image_index]).load(function(){
		var url = $(image_pool[image_index]).attr('src');
		$('div#content_box>div.bg1').delay(10000).fadeOut(5000,function(){
			$(this).css('backgroundImage','url('+url+')').show();
		});
		$('div#content_box>div.bg2').css('backgroundImage','url('+url+')').delay(10000).fadeIn(5000,function(){
			$(this).hide();
			imageShowRun();
		});
		image_index++;
		image_index = (image_index<image_pool.length)?image_index:0;
	//});
	
};

function jsonFlickrApi(obj){
	var arr = obj.photos.photo;
	var temp_url = '';
	for (var i=0;i<Math.min(obj.photos.photo.length,20);i++){
		temp_url = flickrUrl(arr[i].farm,arr[i].server,arr[i].id,arr[i].secret);
		image_pool.push($('<img />').attr('src',temp_url));
	}
	$(image_pool[0]).load(imageShowRun);
	//imageShowRun();
}

$(document).ready(function(){
	//alert($('div#content_box>div.banner').height()+$('div#content_box>div.banner').position().top+$('div#content_box>div.banner').position().bottom);
	//console.log('top'+$('div#content_box>div.banner').css('top'));
	//console.log('bot'+$('div#content_box>div.banner').css('bottom'));
	
	$('div#content_box').height($('div#content_box>div.banner').height()+parseInt($('div#content_box>div.banner').css('top'))+parseInt($('div#content_box>div.banner').css('bottom')));
	$('div#content_box>div.bg1').height($('div#content_box').height());
	$('div#content_box>div.bg2').height($('div#content_box').height()).hide();
	$.ajax('keys').done(function(key){
		console.log(key);
		//$('body').append($('<script><script>').attr('src',"https://api.flickr.com/services/rest/?method=flickr.photos.search&text=qr%20code&api_key="+key+"&format=json&media=photos"));
		$.ajax({url:"https://api.flickr.com/services/rest/?method=flickr.photos.search&text=qr%20code&api_key="+key+"&format=json&media=photos",dataType:'jsonp'})
			.done(function(data){
				console.log('success');
				console.log(data.photos.photo[0]);
				/*var arr = data.photo;
				//var temp;
				for (var i=0;i<arr.length;i++){
					image_pool.push($('<img />').attr('src',arr[i].media.m.replace('_m.','_b.')));
				
				}
				arr = null;
				imageShowRun();*/
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
	
});