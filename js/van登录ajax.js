<script type="text/javascript" src="js/tools.js" ></script>

	window.onload = function(){
		$(".click").onblur = getMessage;
	}

	function getMessage(){
		let xhr = new XMLHttpRequest();
		
		//1、创建对象
		let xhr=new XMLHttpRequest();
		//2、设置请求参数
		xhr.open("get","checkNumber.php?shopid1="+$("#shopid").value,true);
		//3、设置回调函数
		xhr.onreadyStatechange=function(){
			if(xhr.readyState==4 && xhr.status==200){
				if(xhr.responseText=="1"){
					$("#goodsidMsg").innerHTML="编号重复，请修改！";
				}else{
					$("#goodsidMsg").innerHTML="正确！";
				}
			}
		}
		//4、发送
		xhr.send();

	}

