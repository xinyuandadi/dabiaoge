$(function(){
	// 页面加载的时候触发导航，让导航飞走 
	$(".nav").css({"left":"-100%"}).animate({"left":"0%"})
	// 一屏，中间文字鼠标经过放大
	$(".d").hover(function(){
        $(this).css({"transform":"scale(1.2)","transition-duration":"2s"})
	},function(){
        $(this).css({"transform":"scale(1)","transition-duration":"2s"})
	})
	 // 二屛，图和文字鼠标经过放大
	$("#se2").hover(function(){
		$(this).css({"transform":"scale(1.1)","transition-duration":"2s"});
		$(".img2").css({"transform":"scale(1.1)","transition-duration":"2s"});
	},function(){
		$(this).css({"transform":"scale(1)","transition-duration":"2s"});
		$(".img2").css({"transform":"scale(1)","transition-duration":"2s"});
	})
	// 二屏中间文字飞走
	$(".zi").css({"top":"-70%"}).delay(2000).animate({"top":"3%"})
   // “查看更多”飞走，以及鼠标经过变色
    $(".more").css({"bottom":"-40%"}).delay(2000).animate({"bottom":"10%"})
    $(".more").hover(function(){
     	$(this).css({"background-color":"#0daa63","text-shadow":"#333 2px 2px 2px","transition-property":"all","transition-duration":"1s"})
     },function(){
     	$(this).css({"background-color":"","text-shadow":"#333 2px 2px 2px","transition-property":"all","transition-duration":"1s"})
     })
    // 利用fullpage让底部版权飞入，飞走
	$("#full").fullpage({
		navigation:true,
        loopTop:true,
        loopBottom:true,
        afterLoad:function(onchorlink,index){
          if(index==1){
          	$(".p3").css({"left":"-100%"}).animate({"left":"0%"})
          }
          if(index==2){
          	$(".p3").css({"left":"-100%"}).animate({"left":"0%"})
          }
          if(index==3){
          	$(".p3").css({"left":"-100%"}).animate({"left":"0%"})
          }
        },
        onLeave:function(index,nextIndex,direction){
          if(index==1){
          	$(".p3").animate({"left":"-100%"})
          }
          if(index==2){
          	$(".p3").animate({"left":"-100%"})
          }
          if(index==3){
          	$(".p3").animate({"left":"-100%"})
          }
        }
	})

})