 //using while loop

function repeat(str, num){
   var repeatedString = "";
   while(num > 0){
   	repeatedString += str;
   	num--;
   }
   return repeatedString;
}