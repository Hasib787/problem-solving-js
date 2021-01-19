function factorial(n){
    let factorial = 1;
    for (i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
 const result=factorial(6);
 console.log(result);