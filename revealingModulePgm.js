var counter = (function(){
    let count = 0;

    function print(message){
        console.log(message + ' '+count);
    }

        function incrementCount(){
            count+=1
            print('After increment: ');
        }
        
        function resetCount(){
            print('before reset ');
            count = 0;
            print('After reset ');
        }

        return{
            increment: incrementCount,
            reset : resetCount,
            print : print
        }

    
})();

//console.log(counter.count);
counter.increment();
//console.log(counter.increment());
counter.reset();
counter.print('lk');
