
var totel=500

var sub2= Number(prompt("Please enter maths number")) 

var sub3= Number(prompt("Please enter english number")) 

var sub4= Number(prompt("Please enter urdu number")) 

var sub5= Number(prompt("Please enter computer number")) 

var sub6= Number( prompt("Please enter islamiat number"))

var result = sub2 + sub3 + sub4 + sub5 + sub6;

var percentage = (result / totel) * 100;

console.log( totel + result);
console.log("Percentage is " + percentage + "%");
alert("Percentage is " + percentage + "%");