window.onload = function(){
		$("#zd").click(function(){
			$("html,body").animate({
				scrollTop:0
			},500);
			return false;
		});
		$("#zhuce").onblur= function(){
			zhuce();
		}
		alert("12");
	}

	function zhuce(){
		 
			//1、创建对象
			let xhr = new XMLHttpRequest();
			//2、设置请求参数
			xhr.open("get","vans注册checkNumber.php?phone1="+$("#zhuce").value,true);
			
			//3、设置回调函数
			xhr.onreadystatechange = function(){
				if(xhr.readyState==4 && xhr.status==200){
					if(xhr.responseText=="1"){
						// $("#notice-inline1").style.display="block";			 	    
						alert("1");
				  	}
				}
			}
			//4、发送
			xhr.send();		
	}
}