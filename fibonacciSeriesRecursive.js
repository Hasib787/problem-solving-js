function fibonacci(n) {
    if (n == 0) {
        return [0];
    }
    else if (n == 1) {
        return [0, 1];
    } else {
        // calculate array with nth element
        let fibo = fibonacci(n - 1);
        let nextElement = fibo[n - 1] + fibo[n - 2];
        fibo.push(nextElement);
        return fibo;
    }
}

    let result =fibonacci(1);
    console.log(result);