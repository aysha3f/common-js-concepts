// node triple.js
// always use ===
// equal comparison doesn't work for non-primitive

const first = [];
const second = first;
if(first == second){
    console.log('values are equal')
}
else{
    console.log('values are not equal')
}

// type coercion
// type conversion
// type casting