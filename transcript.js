var string1 = "This is a test";
var string2 = "Is this a test";

var regex = /this/;

console.log("regex present in '"+string1+"':"+regex.test(string1));
console.log("regex present in '"+string2+"':"+regex.test(string1));

