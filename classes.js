class One {
    constructor(first)
    {
        this.first = first;
    }

    printOne(){
        console.log('this is '+this.first+ ' from printOne');
    }
}

let oneObj = new One('f');
oneObj.printOne();

class Two extends One{
    printTwo(){
        console.log(`this is ${this.first} from printTwo`);
    }

}

let twoObj = new Two('a');
twoObj.printOne();
twoObj.printTwo();