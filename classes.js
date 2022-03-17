class User {
    constructor(name, company) {
        this.name = name;
        this.company = company;
    }
    login() {
        console.log(this.name + " just logged in");
    }
    logout() {
        console.log(this.name + " just logged out");
    }
}

var u1 = new User("Sapnadip", "HighradiusBD");
var u2 = new User("Tuhin", "HighradiusML");

props = 'name';
console.log(u1[props] + " " + u1.company);
console.log(u2[props] + " " + u2.company);

u1.login();
u2.logout();

//what is the "new" keyword doing here

/**
 * Creates a blank, plain JavaScript object.
 * Adds a property to the new object (__proto__) that links to the constructor function's prototype object
 * this in the constructor function now refer to the object created in the first step
 * Returns this if the function doesn't return an object
 */