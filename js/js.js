$(document).scroll(function(){
	var tops=$(this).scrollTop();
	if(tops >50) {
		$('.nav_con').addClass('pof');
		$('.daohang').addClass('zhid');
	} if(tops<50) {
		$('.nav_con').removeClass('pof');
		$('.daohang').removeClass('zhid');
	} if(tops>2200){
		$('.mc_b ul>li:nth-last-of-type(-n+3)').css('display','block')
	}
})
$('.arrli>li').click(function() {
	var i = $(this).index();
	var louc = $('.Cme').eq(i).offset().top;
	$('html,body').stop().animate({
		scrollTop: louc
	}, 500)
})
$('.arrli1>li').click(function() {
	var i = $(this).index();
	var louc = $('.Cme1').eq(i).offset().top;
	$('html,body').stop().animate({
		scrollTop: louc
	}, 500)
})
$('.btn_co').click(function(){
	$("#myModal3").fadeIn(500);
})
$('.btn-ba').click(function(){
	$("#myModal3").fadeOut(500);
})
//新闻跳转

