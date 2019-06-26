let myObject = { value: 'Local Oject...'};

global.value = 'Global object...';

function objectPrint(){
    return this.value;
}

function objectPrintlocal(name){
    return this.value+name;
}

function fullName(){
    console.log(this.firstName+' '+this.lastName);
}

function information(city){
    this.city = city;
    console.log(Object);
    console.log(this.firstName+' '+this.lastName+' '+this.city);
}


console.log(objectPrint.call());
console.log(objectPrint.apply());

console.log(objectPrintlocal.call(myObject, 'abc'));
console.log(objectPrintlocal.apply(myObject, ['abc']));


let person1 = {
    firstName: 'Harry',
    lastName: 'Potter',
    city: 'London',
    name: fullName,
    in : information,
    /*anotherfunction: function(){
        var that= this;
        bjectb.func(){
            this
        }
    }*/
}

person1.in('Pune');

information();
person1.in