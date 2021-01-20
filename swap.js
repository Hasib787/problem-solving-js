// 1st way swap variable
let a = 8;
let b = 6;
temp = a;
a = b;
b = temp;
console.log('after swap: a =', a, ', b =', b);

//2nd way- swap variable
let x = 8;
let y = 6;
x = x + y;
y = x - y;
x = x - y;
console.log('after swap: x=', x, ',y=', y);

//3rd way- swap variable

let p=8;
let q=6;
[p, q]=[q, p];
console.log('after swap: p=', p, ',q=', q);



