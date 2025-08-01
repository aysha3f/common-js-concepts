// node closure.js
function kitchen (){
let roast = 0;
return function(){
    roast ++;
    return roast;
}}
function stopWatch (){
let counter = 0;
 function watch(){

    counter ++;
    return counter;
}
}
watch()
const firstServer = kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());