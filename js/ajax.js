 
  var thisURL = document.URL;
  var  getval =thisURL.split('?')[1];  
  var showval= getval.split("=")[1];  
  function  showvalf(){  
//   if(){
     	console.log(showval)
     	if (showval==0) {
     		$.ajax({
					url: "https://newseditor.gamepoch.com/thinkcmf/data_news.php?post_net=gamepoch.cn",
					dataType:'json', 
					data: {userId:"1"}, //请求的附加参数，用json对象
					method:'POST',
					success: function(data){
//						console.log(data)
					$('#ajax').html(data[0].post_content);
					$('.fenye').css('display','none');
					},
				});
     	} else if(showval==1){
     		$.ajax({
					url: "https://newseditor.gamepoch.com/thinkcmf/data_news.php?post_net=gamepoch.cn",
					dataType:'json', 
					data: {userId:"1"}, //请求的附加参数，用json对象
					method:'POST',
					success: function(data){
//						console.log(data)
					$('#ajax').html(data[1].post_content);
					$('.fenye').css('display','none');
					},
				});
     		
     	}else if(showval==2){
     		$.ajax({
					url: "https://newseditor.gamepoch.com/thinkcmf/data_news.php?post_net=gamepoch.cn",
					dataType:'json', 
					data: {userId:"1"}, //请求的附加参数，用json对象
					method:'POST',
					success: function(data){
//						console.log(data)
					$('#ajax').html(data[2].post_content);
					$('.fenye').css('display','none');
					},
				});
     		
     	}else if(showval==3){
     		$.ajax({
					url: "https://newseditor.gamepoch.com/thinkcmf/data_news.php?post_net=gamepoch.cn",
					dataType:'json', 
					data: {userId:"1"}, //请求的附加参数，用json对象
					method:'POST',
					success: function(data){
//						console.log(data)
					$('#ajax').html(data[3].post_content);
					$('.fenye').css('display','none');
					},
				});
     		
     	}else if(showval==98){
     		$('#box').paging({
		    initPageNo: 1, // 初始页码
		    totalPages: 13, //总页数
//		    totalCount: '合计130条数据', // 条目总数
		    slideSpeed: 600, // 缓动速度。单位毫秒 
		    callback: function(page) { // 回调函数 
//		        console.log(page);
		        if(page==1){
				$.ajax({
					url: "https://newseditor.gamepoch.com/thinkcmf/data_news.php?post_net=gamepoch.cn",
					dataType:'json', 
					data: {userId:"1"}, //请求的附加参数，用json对象
					method:'POST',
					success: function(data){
//						console.log(data)
					$('#ajax').html(data[0].post_content);
					},
				});
		        }else if(page==2){
		        	$.ajax({
					url: "https://newseditor.gamepoch.com/thinkcmf/data_news.php?post_net=gamepoch.cn",
					dataType:'json', 
					data: {userId:"1"}, //请求的附加参数，用json对象
					method:'POST',
					success: function(data){
//						console.log(data)
					$('#ajax').html(data[1].post_content);
					},
				});
		        }else if(page==3){
		        	$.ajax({
					url: "https://newseditor.gamepoch.com/thinkcmf/data_news.php?post_net=gamepoch.cn",
					dataType:'json', 
					data: {userId:"1"}, //请求的附加参数，用json对象
					method:'POST',
					success: function(data){
//						console.log(data)
					$('#ajax').html(data[2].post_content);
					},
				});
		        }else if(page==4){
		        	$.ajax({
					url: "https://newseditor.gamepoch.com/thinkcmf/data_news.php?post_net=gamepoch.cn",
					dataType:'json', 
					data: {userId:"1"}, //请求的附加参数，用json对象
					method:'POST',
					success: function(data){
//						console.log(data)
					$('#ajax').html(data[3].post_content);
					},
				});
		        }else if(page==5){
		        	$.ajax({
					url: "https://newseditor.gamepoch.com/thinkcmf/data_news.php?post_net=gamepoch.cn",
					dataType:'json', 
					data: {userId:"1"}, //请求的附加参数，用json对象
					method:'POST',
					success: function(data){
//						console.log(data)
					$('#ajax').html(data[4].post_content);
					},
				});
		        }else if(page==6){
		        	$.ajax({
					url: "https://newseditor.gamepoch.com/thinkcmf/data_news.php?post_net=gamepoch.cn",
					dataType:'json', 
					data: {userId:"1"}, //请求的附加参数，用json对象
					method:'POST',
					success: function(data){
//						console.log(data)
					$('#ajax').html(data[5].post_content);
					},
				});
		        }else if(page==7){
		        	$.ajax({
					url: "https://newseditor.gamepoch.com/thinkcmf/data_news.php?post_net=gamepoch.cn",
					dataType:'json', 
					data: {userId:"1"}, //请求的附加参数，用json对象
					method:'POST',
					success: function(data){
//						console.log(data)
					$('#ajax').html(data[6].post_content);
					},
				});
		        }else if(page==8){
		        	$.ajax({
					url: "https://newseditor.gamepoch.com/thinkcmf/data_news.php?post_net=gamepoch.cn",
					dataType:'json', 
					data: {userId:"1"}, //请求的附加参数，用json对象
					method:'POST',
					success: function(data){
//						console.log(data)
					$('#ajax').html(data[7].post_content);
					},
				});
		        }else if(page==9){
		        	$.ajax({
					url: "https://newseditor.gamepoch.com/thinkcmf/data_news.php?post_net=gamepoch.cn",
					dataType:'json', 
					data: {userId:"1"}, //请求的附加参数，用json对象
					method:'POST',
					success: function(data){
//						console.log(data)
					$('#ajax').html(data[8].post_content);
					},
				});
		        }else if(page==10){
		        	$.ajax({
					url: "https://newseditor.gamepoch.com/thinkcmf/data_news.php?post_net=gamepoch.cn",
					dataType:'json', 
					data: {userId:"1"}, //请求的附加参数，用json对象
					method:'POST',
					success: function(data){
//						console.log(data)
					$('#ajax').html(data[9].post_content);
					},
				});
		        }else if(page==11){
		        	$.ajax({
					url: "https://newseditor.gamepoch.com/thinkcmf/data_news.php?post_net=gamepoch.cn",
					dataType:'json', 
					data: {userId:"1"}, //请求的附加参数，用json对象
					method:'POST',
					success: function(data){
//						console.log(data)
					$('#ajax').html(data[10].post_content);
					},
				});
		        }else if(page==12){
		        	$.ajax({
					url: "https://newseditor.gamepoch.com/thinkcmf/data_news.php?post_net=gamepoch.cn",
					dataType:'json', 
					data: {userId:"1"}, //请求的附加参数，用json对象
					method:'POST',
					success: function(data){
//						console.log(data)
					$('#ajax').html(data[11].post_content);
					},
				});
		        }else if(page==13){
		        	$.ajax({
					url: "https://newseditor.gamepoch.com/thinkcmf/data_news.php?post_net=gamepoch.cn",
					dataType:'json', 
					data: {userId:"1"}, //请求的附加参数，用json对象
					method:'POST',
					success: function(data){
//						console.log(data)
					$('#ajax').html(data[12].post_content);
					},
				});
		        }
    }
})
     		
     	}
 
  
  
  
  }
