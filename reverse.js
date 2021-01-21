function reverseString(str) {
    let reverse = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
let sentence =reverseString('Hello I am Hasib.');
console.log(sentence);