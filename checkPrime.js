
function isPrime(n){
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            return 'Not a prime Number';
        }
    }
    return 'Its a prime number';
}
let result=isPrime(15);
console.log(result);
