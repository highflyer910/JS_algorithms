//using while loop

function repeat(str, num){
   var repeatedString = "";
   while(num > 0){
   	repeatedString += str;
   	num--;
   }
   return repeatedString;
}

//using ES6 repeat() method and ternary operators

function repeat(str, num){
	return num > 0 ? string.repeat(num) : "";
}