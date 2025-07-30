// node truthy-falsy.js
/*
 Truthy:
  1. True
  2. any number (+ve and -ve) will be truthy
  3. any string
  4. (' ') any string with a space is truthy
  5.'0'
  6. 'false'
  7. {} ,{a:5, b:45}, [], [5,6,6,4]
  Falsy:
  1. False
  2. 0
  3. '' (empty string will be falsy)
  4. undefined
  5. null
 */

let x = [5, 6];
// console.log(x)
if(x){
    // console.log('value of x is truthy');
}
else{
    // console.log('value of x is falsy');
}
// optional
// check falsy
const y = null;
if(!y){
console.log('value is falsy')
}

const z = {class:9};
// check true
if(!!x){
    console.log('value is truthy')
}