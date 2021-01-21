function arraySum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let elements = numbers[i];
        sum = sum + elements;
    }
    return sum;
}
let result=arraySum([54,87,645,78,45,12,2]);
    console.log(result);