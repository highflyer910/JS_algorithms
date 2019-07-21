//Reverse a String With a Decrementing For Loop


function reverseString(str) {
    let reversed = "";
    
    for (let character of str){
      reversed = charactar + reversed;
    }

    return reversed;
}