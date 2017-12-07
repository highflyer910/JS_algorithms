function factorialize(num) {
  var factorial = 1;
  for (var n = 2; n <= num; n++) {
    factorial = factorial * n;
  }

  return factorial;
}



//Another way to solve (recursion)

function factorial(num){
	if(num === 0){
		return 1;
	}

	return num * factorial(num -1);
}