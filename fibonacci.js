//fibo[7]=fibo[7-1]+fibo[7-2]
//fibo[i]=fibo[i-1]+fibo[i-2]

function fibonacci(n) {
    let fibo = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
let result=fibonacci(12);
console.log(result);