let marks = [78, 54, 79, 80, 91, 35, 97, 45, 62];
let max = marks[0];
for (i = 0; i < marks.length; i++) {
    let element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log("The highest value is:", max);