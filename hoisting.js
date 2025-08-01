// node hoisting
// for(var i = 0; i< 5; i++){
//     console.log(i);
// }
// console.log('outside', i);

prints5();
print10();
for(let i = 0; i< 5; i++){
    // console.log(i);
}
// console.log('outside', i);

function prints5(){
    console.log('inside print', 5);
}
var print10 = function (){
console.log('inside print10', 10);
}