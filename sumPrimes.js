function sumPrimes(num) {
  var primes = [];
  var total;

  for (var i = 2; i <= num; i++) {

    var isPrime = true;

    for (var j = 2; j < i; j++) {

      if (i % j === 0) {
        isPrime = false;
      }

    }
    if (isPrime) {
        primes.push(i);
      }
   }
  total = primes.reduce(function(a,b) {
    return a + b;
  });

  return total;

}