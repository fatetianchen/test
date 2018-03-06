  var thisURL = document.URL;    
  var  getval =thisURL.split('?')[1];  
  var showval= getval.split("=")[1];  
  function  showvalf(){  
//   if(){
     	console.log(showval)
     	if (showval==0) {
     		$.ajax({
					url: "http://139.196.239.213/thinkcmf/data_news.php?post_net=gamepoch.cn",
					dataType:'json', 
					data: {userId:"1"}, //请求的附加参数，用json对象
					method:'POST',
					success: function(data){
//						console.log(data)
					$('#ajax').html(data[0].post_content);
					},
				});
     	} else if(showval==1){
     		$.ajax({
					url: "http://139.196.239.213/thinkcmf/data_news.php?post_net=gamepoch.cn",
					dataType:'json', 
					data: {userId:"1"}, //请求的附加参数，用json对象
					method:'POST',
					success: function(data){
//						console.log(data)
					$('#ajax').html(data[1].post_content);
					},
				});
     		
     	}else if(showval==2){
     		$.ajax({
					url: "http://139.196.239.213/thinkcmf/data_news.php?post_net=gamepoch.cn",
					dataType:'json', 
					data: {userId:"1"}, //请求的附加参数，用json对象
					method:'POST',
					success: function(data){
//						console.log(data)
					$('#ajax').html(data[2].post_content);
					},
				});
     		
     	}else if(showval==3){
     		$.ajax({
					url: "http://139.196.239.213/thinkcmf/data_news.php?post_net=gamepoch.cn",
					dataType:'json', 
					data: {userId:"1"}, //请求的附加参数，用json对象
					method:'POST',
					success: function(data){
//						console.log(data)
					$('#ajax').html(data[3].post_content);
					},
				});
     		
     	}   
  }  