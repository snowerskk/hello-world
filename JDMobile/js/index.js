window.onload=function(){
	search();
	banner();
	scrollBanner1();
	scrollBanner2();
}
/* 搜索栏背景色渐变 */
var search=function(){
	var search=document.querySelector('.search-box');
	var banner=document.querySelector('.banner');
	var height=banner.offsetHeight;
	window.onscroll=function(){
		var top=document.body.scrollTop;
		var opacity=0;
		if(top>height){
			opacity=0.85;
		}
		else{
			opacity=0.85*(top/height);
		}
		search.style.background='rgba(216,80,92,'+opacity+')';
	}
}
/* 图片无缝滚动和滑动 */
var banner=function(){
	var banner=document.querySelector('.banner');
	var width=banner.offsetWidth;
	var imageBox=banner.querySelector('ul:first-child');
	var pointBox=banner.querySelector('ul:last-child');
	var points=pointBox.querySelectorAll('li');
	var index=1;
	/* 加过渡 */
	var addTransition=function(){
		imageBox.style.transition="all 0.6s";
		imageBox.style.webkitTransition="all 0.6s";
	}
	/* 清过渡 */
	var removeTransition=function(){
		imageBox.style.transition="none";
		imageBox.style.webkitTransition="none";
	}
	/* 定位 */
	var setTranslateX=function(transX){
		imageBox.style.transform="translateX("+transX+"px)";
		imageBox.style.webkitTransform="translateX("+transX+"px)";
	}
	/* 加上定时器 */
	var timer=setInterval(function(){
		index++;
		addTransition();
		setTranslateX(-index*width);
		/* 轮播图白点部分 */
		for(i=0;i<points.length;i++){
			if(index>=9){
				points[i].style.background="none";
				points[0].style.background="white";
			}
			else{
				points[i].style.background="none";
				points[index-1].style.background="white";
			}
		}
	},3000);
	/* 绑定过渡结束事件 */
	imageBox.addEventListener("transitionend",function(){
		if(index>=9){
			index=1;
			removeTransition();
			setTranslateX(-index*width);
		}
		else if(index<=0){
			removeTransition();
			setTranslateX(-index*width);
		}
	})
	/* 绑定触摸开始事件 */
	var startX=0;
	var distanceX=0;
	var isMove=false;
	imageBox.addEventListener('touchstart',function(ev){
		startX=ev.targetTouches[0].clientX;
	})
	/* 绑定触摸滑动事件 */
	banner.addEventListener('touchmove',function(ev){
		clearInterval(timer);
		var moveX=ev.targetTouches[0].clientX;
		distanceX=moveX-startX;
		var transX=-index*width+distanceX;
		removeTransition();
		setTranslateX(transX);
		isMove=true;
	})
	/* 绑定触摸结束事件 */	
	imageBox.addEventListener('touchend',function(ev){
		if(isMove){/* 判断是否产生滑动 */
			if(Math.abs(distanceX)<width/3){/* 判断滑动距离 */
				addTransition();
				setTranslateX(-index*width);
			}
			else{
				if(distanceX>0){/* 判断滑动方向 */
					index--;
				}
				else{
					index++;
				}
				addTransition();
				setTranslateX(-index*width);
			}
		}
		/* 重新加上定时器 */
		clearInterval(timer);
		timer=setInterval(function(){
			index++;
			addTransition();
			setTranslateX(-index*width);
			for(i=0;i<points.length;i++){
				if(index>=9){
					points[i].style.background="none";
					points[0].style.background="white";
				}
				else{
					points[i].style.background="none";
					points[index-1].style.background="white";
				}
			}
		},3000);
		/* 重置参数 */
		startX=0;
		distanceX=0;
		isMove=false;
	})
}
/////////////////////////////////////////////////////////////////////////////////////////////
var scrollBanner=function(scrollBanner){/* 图片轮播部分方法 */
	var width=scrollBanner.offsetWidth;
	var imageBox=scrollBanner.querySelector('ul');
	var index=1;
	/* 加过渡 */
	var addTransition=function(){
		imageBox.style.transition="all 0.6s";
		imageBox.style.webkitTransition="all 0.6s";
	}
	/* 清过渡 */
	var removeTransition=function(){
		imageBox.style.transition="none";
		imageBox.style.webkitTransition="none";
	}
	/* 定位 */
	var setTranslateX=function(transX){
		imageBox.style.transform="translateX("+transX+"px)";
		imageBox.style.webkitTransform="translateX("+transX+"px)";
	}
	/* 加上定时器 */
	var timer=setInterval(function(){
		index++;
		addTransition();
		setTranslateX(-index*width);
	},3000);
	/* 绑定过渡结束事件 */
	imageBox.addEventListener("transitionend",function(){
		if(index>=3){
			index=1;
			removeTransition();
			setTranslateX(-index*width);
		}
		else if(index<=0){
			removeTransition();
			setTranslateX(-index*width);
		}
	})
	/* 绑定触摸开始事件 */
	var startX=0;
	var distanceX=0;
	var isMove=false;
	imageBox.addEventListener('touchstart',function(ev){
		startX=ev.targetTouches[0].clientX;
	})
	/* 绑定触摸滑动事件 */
	scrollBanner.addEventListener('touchmove',function(ev){
		clearInterval(timer);
		var moveX=ev.targetTouches[0].clientX;
		distanceX=moveX-startX;
		var transX=-index*width+distanceX;
		removeTransition();
		setTranslateX(transX);
		isMove=true;
	})
	/* 绑定触摸结束事件 */	
	imageBox.addEventListener('touchend',function(ev){
		if(isMove){/* 判断是否产生滑动 */
			if(Math.abs(distanceX)<width/3){/* 判断滑动距离 */
				addTransition();
				setTranslateX(-index*width);
			}
			else{
				if(distanceX>0){/* 判断滑动方向 */
					index--;
				}
				else{
					index++;
				}
				addTransition();
				setTranslateX(-index*width);
			}
		}
		/* 重新加上定时器 */
		clearInterval(timer);
		timer=setInterval(function(){
			index++;
			addTransition();
			setTranslateX(-index*width);
		},3000);
		/* 重置参数 */
		startX=0;
		distanceX=0;
		isMove=false;
	})
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
/* scrollBanner1 */
var scrollBanner1=function(){
	var scrollBanner1=document.querySelector('.scrollBanner1');
	scrollBanner(scrollBanner1);
}
/* scrollBanner2 */
var scrollBanner2=function(){
	var scrollBanner2=document.querySelector('.scrollBanner2');
	scrollBanner(scrollBanner2);
}