class Parent {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        console.log(this.fname);
        console.log(this.lname);
        console.log(this.age);

    }
    print() { console.log(this.fname + " " + this.lname + " " + this.age); }
}

class Child extends Parent {

    constructor(fname, lname, type) {
        console.log("/////////////////////////////////////////////////\n");

        console.log("inside child");

        super(fname, lname); //age is not given here  so it prints undefined since
        this.type = type; //super called the parent class constructor and we are not giving value to one of the
        console.log(this.type); //param so it becomes undefined 

        this.print();
    }
}
var Pr = new Parent("Sapnadip", "Baidya", 19);

var Ch = new Child("tuhin", "maity", "child");