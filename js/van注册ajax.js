	function $(str){
		if(str.charAt(0)=="#"){
			return document.getElementById(str.substring(1));
		}else if(str.charAt(0)=="."){
			return document.getElementsByClassName(str.substring(1));
		}else{
			return document.getElementsByTagName(str);
		}
	}

	// $(function (){

	// 	$("#zhuce").blur(function (){
	// 		getName();
	// 	});
	// });

	// function getName(){ 
	// 	let xhr=new XMLHttpRequest();
	// 	// console.log($("#zhuce").value);
	// 	xhr.open("get","vans注册checkNumber.php?phone1="+$("#zhuce").val(),true);
	// 	//3、设置回调函数
	// 	xhr.onreadystatechange=function(){
	// 		if(xhr.readyState==4 && xhr.status==200){
	// 			alert(xhr.responseTex);
	// 			if(xhr.responseText=="1"){
	// 				$("#notice-inline1").style.display="block";
	// 			}
	// 		}
	// 	}
	// 	//4、发送
	// 	xhr.send();
	// }


	window.onload = function(){
	$("#zhuce").onblur = function(){
		//1、创建对象
		let xhr = new XMLHttpRequest();
		//2、设置请求参数
		xhr.open("get","vans注册checkNumber.php? phone1="+$("#zhuce").value,true);
		
		//3、设置回调函数
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				if(xhr.responseText=="1"){
					$("#notice-inline1").style.display="block";
					// $("#usernameMsg").innerHTML = "亲，用户名已经存在，请重新选择吧！";				 	   	  
			  	}
			}
		}
		//4、发送
		xhr.send();		
	}
}