//5!=1*2*3*4*5
//6!=1*2*3*4*5*6
//6!=(6-1)!*6

function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
let result = factorial(5);
console.log(result);