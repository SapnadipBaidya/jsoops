//by creating instance of an object
var obj = new Object;
obj.name = "sapnadip";
obj.age = 21;
console.log(obj.name + " " + obj.age);


function obj1(name, salary) { //By using an Object constructor
    this.name = name;
    this.salary = salary;
    console.log(this.name + " " + this.salary);
}

var ob1 = new obj1("sapnadip", 1900000);



var userOne = {
    name: "Sapnadip",
    email: "Sapnadip@gmail.com",

    login: function() {
        console.log(this.name + " has logged in");
    },

    logout() {
        console.log(this.name + " has logged out");
    } //here in this scope  "this" refers to the object ->userOne
};
userOne.login();
userOne.logout();

//here in this scope  "this" refers to the object ->window of the browser i.r GEC

//updating  properties in an object
userOne.email = "babai@gmail.com";
console.log(userOne);
userOne["name"] = "babai";
console.log(userOne);
userOne.login();
userOne.login = function() { console.log("updated login") } //updating states or methods
userOne.login();
// [] <-- why does this exists >> for dynamic purposes

//example
var props = 'name';
props = 'email';
//props = something by user input at run time
console.log(userOne[props]); //we dont need to write two the these separately while userOne.props is invalid since props isnt a property of the object