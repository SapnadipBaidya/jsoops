class Parent {
    constructor() {
        console.log("hi this is default constructor");
    }

    constructor(name) {
        this.name = name;
        console.log("hi this is param constructor " + this.name);
    }
}

var pr = new Parent("deep")

//this above code will give error since in js, one class can have one constructor only