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

//with the sort() method

function findLongestWord(str) {
  var longestWord = str.split(' ').sort(function(a, b) {
   return b.length - a.length; 
});
  return longestWord[0].length;
}

// with for .. of
function findLongestWord(str) {
  const words = str.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) longest = word;
  }
  return longest;
}

// with reduce()
const findLongestWord = str =>
  str.split(" ").reduce((longest, current) =>
    current.length > longest.length ? current : longest
  );
