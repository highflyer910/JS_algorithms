//with a FOR LOOP
function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	longestWord = strSplit[i].length;
     }
  }
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog"); // jumped




//with the sort() method
function findLongestWord(str) {
  var longestWord = str.split(' ').sort(function(a, b) {
   return b.length - a.length; 
});
  return longestWord[0].length;
}