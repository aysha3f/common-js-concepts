// node types.js
/** strongly typed programming language
 * int a = 5;
 * string b = 'alim halim khalim';
 * bool c = True;
 * object student = {name: 'noya dhaman', id:55};
 * int[] numbers = [12, 45, 78];
 * string [] friends = ['abul', 'babul'];
 */

// JavaScript is a dynamic typed of Language
const a = 5;
const b = 'Samsu Kopi na ekhon ar';
const d = true;


// non-primitive
const ages = [45, 65, 48];
const student = {id:23, class: 7};

// console.log(typeof a, typeof b, typeof ages, typeof student, typeof d);

let x = 5;
let y = x;
console.log(x, y);
y = 7; // reassign a value here
console.log(x, y);

let p = {job: 'web developer'};
let q = p;
// q = {job: 'Backend end'} // you change full value than it will reassign the value
q.job = 'front end developer'// you have to reassign the value otherwise it will refrence the value.
console.log(p, q);

