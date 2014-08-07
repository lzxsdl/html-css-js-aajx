// $("#submit1").click(function(){
	// alert("成功了");
	// return false;
// });


// for(var index in document.forms["testform"].elements)
// {
	// alert(document.forms["testform"].elements[index].type);
// }


// document.testform.submit1.value = "233333";

// document.testform.testbtn.value = "34444";
// document.testform.testbtn.onmousedown = function(){
	// document.testform.testbtn.value = "按下了";
// }
// document.testform.testbtn.onmouseup = function(){
	// document.testform.testbtn.value = "松开了";
// }


/* document.testform.testbtn.onclick = function(){
	alert(document.testform.longtext.value);
	document.testform.longtext.focus();
	document.testform.longtext.select();
	//document.testform.submit();
} */



/* //当且仅当失去焦点时与得到焦点不一样时触发
document.testform.firstname.onchange = function(){
	alert(this.value);
} */


var _list = document.testform.place.options;
// alert(_list.length);
// for(var index in _list){
	// alert(_list[index].value);
// }
// for(var i=0; i< _list.length; i++){
	// alert(_list[i].text);
// }


var newop = new Option("text","value");
//_list.add(newop,0);
_list[3] = newop;













