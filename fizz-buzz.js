/*Write a program that prints the numbers from 1 to 100.
 But for multiples of three print “Fizz” instead of the number
  and for the multiples of five print “Buzz”. For numbers 
  which are multiples of both three and five print “FizzBuzz”*/


function fizzBuzz(num){
	for(var i = 0; i <= num; i++){
		if(i % 15 === 0){
			console.log('FizzBuzz');
		} else if (i % 3 === 0){
            console.log('Fizz');
		} else if (i % 5 === 0){
			console.log('Buzz');
		} else {
			console.log(i);
		}
	}
}