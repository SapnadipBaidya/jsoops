//this returns instance to the current object when it is present inside a  method ,inside a class
//this -> refers to a particular class instance
class User {

    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.num = 0; //hard coding the value of num as "0" for every new object of User class

    }

    login() {
        console.log(this.name + " logged in ");
        return this;
    }
    logout() {
        console.log(this.name + " logged out ");
        return this;
    }
    count() {
        this.num++;
        console.log(this.num);
        return this; // "return this" ->> helps in method chaining
    }
}

var u1 = new User("Sapnadip", "Sapnadip@mail.com");
var u2 = new User("Tuhin", "Tuhin@mail.com");

u1.login().count().count().logout(); //perforimg method chaining
u2.login().count().count().logout();


//therefore it means u1.login is returning u1 , so we can use u1.count() , which again returns u1 because of "return this;"