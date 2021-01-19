function factorial(num) {
    let i = 1;
    let calculate = 1;
    while (i <= num) {
        calculate = calculate * i;
        i++;
    }
    return calculate;
}
let result = factorial(5);
console.log(result);