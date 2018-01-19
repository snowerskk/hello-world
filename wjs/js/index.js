/* 动态轮播图 */
$(function(){
	banner();
	scroll();
	product();
});
var banner=function(){
	var $banner=$('.carousel');
	var $point=$banner.find('.carousel-indicators');
	var $image=$banner.find('.carousel-inner');
	var $window=$(window);
	var data=[
		{
			pcSrc:'images/banner-img1.jpg',
			mSrc:'images/m-banner-img1.jpg'
		},
		{
			pcSrc:'images/banner-img2.jpg',
			mSrc:'images/m-banner-img2.jpg'
		},
		{
			pcSrc:'images/banner-img3.jpg',
			mSrc:'images/m-banner-img3.jpg'
		},
		{
			pcSrc:'images/banner-img4.jpg',
			mSrc:'images/m-banner-img4.jpg'
		},
		{
			pcSrc:'images/banner-img5.jpg',
			mSrc:'images/m-banner-img5.jpg'
		},
		{
			pcSrc:'images/banner-img6.jpg',
			mSrc:'images/m-banner-img6.jpg'
		},
		{
			pcSrc:'images/banner-img7.jpg',
			mSrc:'images/m-banner-img7.jpg'
		}
	]

	var render = function(){
		var isMobile = $window.width() < 768 ? true : false;
		var pointHTML="";
		var imageHTML="";
		$.each(data,function(k,v){
			pointHTML+='<li data-target="#carousel-example-generic" data-slide-to="'+k+'" "+(k==0?"class="aactive"":"")+"></li>';
			imageHTML+='<div class="item '+(k==0?'active':'')+'">';
			if(isMobile){
				imageHTML+='<a href="#" class="m-imgbox"><img src="'+v.mSrc+'"/></a>';
			}
			else{
				imageHTML+='<a href="#" class="pc-imgbox" style="background-image: url('+v.pcSrc+')"></a>';
			}
			imageHTML+='</div>';
		});
		$point.html(pointHTML);
		$image.html(imageHTML);
	}
	$window.on('resize',function(){
		render();
	}).trigger('resize');
	var startX=0;
	var distanceX=0;
	var isMove=false;
	$banner.on('touchstart',function(ev){
		startX=ev.targetTouches[0].clientX;
	}).on('touchmove',function(ev){
		var moveX=ev.targetTouches[0].clientX;
		distanceX=moveX-startX;
		isMove=true;
	}).on('touchend',function(ev){
		if(isMove&&Math.abs(distanceX)>50){
			if(distanceX>0){
				$banner.carousel('prev');
			}
			else{
				$banner.carousel('next');
			}
		}
		startX=0;
		distanceX=0;
		isMove=false;
	});
	
}
/* 回到顶部 */
function scroll(){
	$(window).scroll(function(){
		if($(document).scrollTop()>=126){
			$('.rocketPart').show();
		}else{
			$('.rocketPart').hide();
		};
	});
	$('.rocketPart').click(function(){
		$(document).scrollTop(0);
	})
}
/* 产品部分 */
function product(){
	$('.content').on('mouseover',function(){
		$(this).stop().animate({'marginTop':0},200);
	}).on('mouseleave',function(){
		$(this).stop().animate({'marginTop':6},200);
	});
}
	
	
	

