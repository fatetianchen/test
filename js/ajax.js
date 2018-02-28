
$(document).ready(function(){
	$.ajax({
					url: "http://139.196.239.213/thinkcmf/data_news.php?post_net=gamepoch.cn",
					dataType:'json', 
					data: {userId:"1"}, //请求的附加参数，用json对象
					method:'POST',
					success: function(data){
						console.log(data)
//					$('#ajax').html(data[0].post_content);
					},
	});
});