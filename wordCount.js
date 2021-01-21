let speech = "I am a good person. I don't snore at night.";

let count = 0;
for (let i = 0; i < speech.length; i++) {
    let char = speech[i];
    if (char == " " && speech[i - 1] != " ") {
        count++;
    }
}
count++;
console.log(count);

// Find a charecter from a sentence

let sentence ="I am hardworking. I am serious. I am sure I will do it aaaa.";
let increase=0;
for(i=0; i<sentence.length; i++){
    let letter=sentence[i];
    if(letter=="a"){
        increase++;
    }
}
console.log(increase);