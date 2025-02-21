class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCoure() {
    console.log(`A new course is added by ${this.username}`);
  }
}

const chai = new Teacher("Chai", "chai@teacher.com", 123)
chai.addCoure()
chai.logMe()
const tea = new User("Masala Chai")
tea.logMe()

console.log(chai instanceof Teacher);
console.log(chai instanceof User);
console.log(tea instanceof Teacher);
