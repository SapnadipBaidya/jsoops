let name = {
    firstName: "Sapnadip",
    lastName: "Baidya",
    age: 21,
    printFullName: function() {
        console.log(this.firstName + " " + this.lastName); //here this refers to the  object name. [Block scope]
    }
}


name.printFullName(); //prints Sapnadip Baidya

//using call method we can do function borrowing
let name2 = {
    firstName: "Tuhin",
    lastName: "Maity",
    age: 20
}
let name3 = {
    firstName: "Niloy",
    lastName: "Mondol",
    age: 23
}
name.printFullName.call(name2); // the 1st argument is what we want "this" to be refering to in this case its object name2
//now this function will print Tuhin Maity


// ///////////////////////////////////////////////////////////////
//more generally using call()

//creating a function in globaL SCOPE
var printAge = function(color, food) { //we can use parameters
    console.log(this.firstName + " age is " + this.age + " fav color is " + color + " fav food is " + food);
}

printAge.call(name, "blue", "pizza"); //giving argument for the above parameter
// printAge.call(name2, "red","burger");

///////////////////////////////////////////////////////////
// apply method is same as call just passing arguments is differnt -> we use arraylist
printAge.apply(name2, ["blue", "burger"]);

//////////////////////////
//bind is exactly same as call but. it returns us copy of the method, after binding object with it

let printDetails = printAge.bind(name3, "green", "Grilled Fish"); //retruns as a  method which can be called later
//this can be invoked later rather than directly invoking it as in case of call()
console.log(printDetails);
printDetails();