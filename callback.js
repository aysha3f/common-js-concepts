// node callback.js

function greeting(greetingHandler,name){
   greetingHandler(name);

}

// const name = 'Halim mama';
// const numbers = [45, 45, 67, 43];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb' }


function greetingHandler(name){
    console.log('Good Morning',name)
}


function greetEvening(name){
    console.log('Good Evening', name);
}

function greetNight (name){
    console.log('Good Night', name)
}
greeting(greetingHandler, "Tom Hanks")
greeting(greetingHandler, "Tom Brady")
greeting(greetingHandler, "Tom Curise")
greeting(greetEvening,"Tom solaiman" )
greeting(greetEvening,"Tom salman" )
greeting(greetNight, "rasel")

