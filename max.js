let business = 700;
let minishter = 600;
let sochib = 500;

let max = Math.max(business, minishter, sochib);
console.log(max);

if (business > minishter) {
    if (business > sochib) {
        console.log("Business is bigger");
    } else {
        console.log("Sochib is bigger");
    }
} else {
    if (minishter > sochib) {
        console.log("Minishter is bigger");
    }else{
        console.log("Sochib is bigger");
    }
}
