// Reverse string with reduce helper function

function reverse(str){
   return str.split('').reduce((rev, char) => char + rev
   , '');
}