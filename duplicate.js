let duplicateName = ["Hasan", 'Hasib', 'Rakib', 'Sojib', 'Hasib', 'Sojib'];
let uniqueName = [];
for(let i=0; i<duplicateName.length;i++){
    let element=duplicateName[i];
    let index=uniqueName.indexOf(element);
    if(index==-1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);

function add(a,b){
    return a+b;
}
console.log(add('adam'+'eve '));