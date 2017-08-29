function harmlessRansomNote(noteText, magazineText){
     var noteArr = noteText.split(' ');
     var magazineArr = magazineText.split(' ');
     var magazineObj = {};

     magazineArr.forEach(word => {
        if(!magazineObj[word]) {
        	magazineObj[word] = 0;
        	magazineObj[word]++;
        }
     });

   var noteIsPossible = true;
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) noteIsPossible = false;
    }
    else noteIsPossible = false; 
  });
  
  return noteIsPossible;
}
