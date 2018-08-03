
$(function(){
	lunbo(); 
	aaa();
})
let lt = 0;
let dou = -1;
function lunbo(){ 
	timer = setInterval(function (){ 
		lt--; 
		if($(".bannerTop")[0].offsetLeft==-3120){
			lt = 0;
			dou = -2;
		}
		if($(".bannerTop")[0].offsetLeft%1040==0){ 
			dou++;
			clearInterval(timer);
			setTimeout(lunbo,1000);
			$(".spanS li").css("backgroundColor","#fff"); 
		}
		$(".bannerTop")[0].style.left = lt+"px"; 
		$(".spanS li")[dou<0?0:dou].style.backgroundColor = "#000";
	},2);
}

$(".index > .Banner").mouseover(function(){
	clearInterval(timer);
});
// $(".index > .Banner").mouseout(function(){
// 	setTimeout(lunbo,1000);
// })




