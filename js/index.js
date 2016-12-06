
$(function(){
	//顶部点击弹出框
	     $('.guild').on('click',function () {
         $('.miun').addClass('active');
        $('.tishi').addClass('active');
    })
    $('.miun').on('click',function () {
        $('.miun').removeClass('active');
        $('.tishi').removeClass('active');
    })
    //banner轮播 
    var gallery = mui('.mui-slider');
    gallery.slider({
    interval:3000//自动轮播周期，若为0则不自动播放，默认为0；
    });
})
