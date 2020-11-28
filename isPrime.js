function isPrime(num) {
    let flag = true;

    for (let i = 2; i <= num - 1; i++) {
        if (num % i === 0) {
            flag = false;
            break;
        }
    }

    if (flag === true) {
        return "n is a prime number";
    }
    return "n is not a prime number";
}