function myFunction(){
    console.log('its a normal function, to make it constructor function call it with new keyword, so that it can receive empty objct and set properties to it');
}

let a = new myFunction();

console.log(typeof myFunction);
console.log(typeof a);
console.log(a);

let b =7;
console.log(typeof b);
