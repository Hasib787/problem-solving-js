function leapYear(year) {
    const remainder = year % 4;
    const remainder1 = year % 100;
    const remainder2 = year % 400;
    if (remainder === 0 && remainder1 != 0 || remainder2 === 0) {
        console.log("Leap Year");
    }
    else {
        console.log("Not a Leap Year");
    }
}

leapYear(2000);
leapYear(2020);
leapYear(3657);