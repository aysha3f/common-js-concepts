// node argument.js
// array like object 
function sum (a,b,c){
 //  console.log( typeof arguments);
 const args = [...arguments];
 // console.log(args);
    const result = a + b + c;
    return result;
}
const total = sum(45, 67, 45,98, 56);
//console.log(total);
console.log(sum.length)