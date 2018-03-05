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
//中文
$('.CN').click(function(){
	$('.CN').css('display','none')
	$('.EN').css('display','block')
	$('.Lg').text('主  页');
	$('.Lg1').text('关  于');
	$('.Lg2').text('服  务');
	$('.Lg3').text('画  廊');
	$('.Lg4').text('新  闻');
	$('.Lg5').text('联  系');
	$('.Lg10').text('龙翼的幻想的女孩');
	$('.Lg6').text('世界建筑构件的幻想');
	$('.Lg7').text('了解更多');
	$('.Lg8').text('关于我们');
	$('.Lg9').text('最新');
})
//英文
$('.EN').click(function(){
	$('.EN').css('display','none')
	$('.CN').css('display','block')
	$('.Lg').text('HOME');
	$('.Lg1').text('ABOUT');
	$('.Lg2').text('SERVICES');
	$('.Lg3').text('GALLERY');
	$('.Lg4').text('NEWS');
	$('.Lg5').text('CONTACT');
	$('.Lg10').text('GIRL DRAGON FANTASY SWORD WING');
	$('.Lg6').text('WPRLD BUILDING IS COMPONENT OF FANTASY');
	$('.Lg7').text('Rcod MOrc');
	$('.Lg8').text('ABOUT US');
	$('.Lg9').text('LATEST');
})
