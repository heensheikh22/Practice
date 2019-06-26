function exceptionOne(a){
    if(a>10)
    {
        throw new Error('a greater than 10');
    }
    return 1;
}

function exceptionTwo(){
    let a = 19;
    let value =0;
    try{
        value = exceptionOne(a);
    }
    catch(error)
    {
        console.log('error caught '+error);
    }
}

exceptionTwo();


var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) 
{
    console.log(tot)
    return total + value;
}
  


}
