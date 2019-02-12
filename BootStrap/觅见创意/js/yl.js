	window.onresize=r;
	function r(){
		var winW=window.innerWidth;
		document.getElementsByTagName("html")[0].style.fontSize=winW*0.1526+"px";
	}
	r();
    // 通过JS获取屏木宽度 然后做样式
    //1em=300px