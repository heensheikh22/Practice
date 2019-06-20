var counter = (function(){
    let count = 0;

    function print(message){
        console.log(message + ' '+count);
    }

    return{
        value: count,

        increment: function(){
            count+=1
            print('After increment: ');
        },
        
        reset: function(){
            print('before reset ');
            count = 0;
            print('After reset ');
        }

    }
})();

console.log(counter.count);
counter.increment();
console.log(counter.increment());



function foo(outer_arg) { 
  
    function inner(inner_arg) { 
        return outer_arg + inner_arg; 
    } 
    return inner; 
} 
var get_func_inner = foo(5); 
  
console.log(get_func_inner(4)); 
console.log(get_func_inner(3)); 
