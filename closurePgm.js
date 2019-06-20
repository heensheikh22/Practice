function hi(name){
    return function(){
        console.log('Hi '+ name);
          c=10;
        
    }
}

let a = hi(10);
a();

console.log(c);