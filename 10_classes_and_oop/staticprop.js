class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
  static createId(){
    return `123`
  }
}

const deepali = new User("Deepali")
// console.log(deepali.createId());

class Teacher extends User{
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("IPhone", "i@phone.com")
// console.log(iphone);
// iphone.logMe()
console.log(iphone.createId());
