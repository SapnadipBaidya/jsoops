class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;

    }
    login() {
        console.log(this.name + " login with " + this.email);

    }
    logout() {
        console.log(this.name + " logout with " + this.email);
    }
}

class Admin extends User {
    delete() {
        console.log(this.name + " deleted");
    }
}

var u1 = new User("Sapnadip", "sapnadip@gmail.com");
var u2 = new Admin("Tuhin", "tuhin@gmail.com");
u1.login();
u1.logout();
u2.delete();