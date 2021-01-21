let friendName = ["Hasan", 'Hasib', 'Rakib', 'Sojib', 'Hasib', 'Sojib'];
let uniqueName = [];
for(let i=0; i<friendName.length;i++){
    let element=friendName[i];
    let index=uniqueName.indexOf(element);
    if(index==-1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);