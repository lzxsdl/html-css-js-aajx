// var a = 1;

// function AAA(a)
// {
	// a = 0;
// }

// AAA(a);
// alert(a);

// var str = "first string";
// var str2 = str;
// str2 = "second string";
// alert(str.length);
// alert(str + "|" + str2);


// var str = new String("first string");
// var str2 = str;
// str2 = "second string";
// alert(str.length);
// alert(str + "|" + str2);


// var str = "你是一头猪";
// alert(str.charAt(str.length - 1));
// var temp = "";
// var unitemp = "";

// for(var index in str)
// {
	// temp = temp + "|" +str[index];
	// unitemp = unitemp + "|" + str.charCodeAt(index);
// }
// alert(temp);
// alert(unitemp);


// var temp;
// temp = String.fromCharCode(10000,20000,30000);
// alert(temp);


// for(var i=0; i<10; i++)
// {
	// var t = Math.random() * 10;
	// document.write(t+"<br />");
// }


// var num = 231.23423423;
// alert(num);
// if(num.toFixed)
// {
	// num = num.toFixed(3);
	// alert(num);
// }


function Cat(name, age, color){
	this.name = name;
	this.age = age;
	this.color = color;
}

Cat.prototype.Laught = function(color){
	this.color = color;
}

var a = new Cat("bill", 45, "blue");
alert(a.name);
alert(a.age);
alert(a.color);
a.Laught("red");
alert(a.color);






