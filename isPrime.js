function isPrime(num) {
    if(num <= 1) return false;
    if(num === 2) return true;

    let num2 = Math.sqrt(num);

    for(let i = 2; i <= num2; i++){
        if(num2 % 2 === 0){
            return false;
        }

        return true;
    }
}