const user = {
  username: "Deepali",
  logginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database")
    // console.log(`username: ${this.username}`);
    console.log(this);
  },
};
// console.log(user.username);
// user.getUserDetails()
// console.log(this);

function User(username, logginCount, isloggedIn) {
  this.username = username;
  this.logginCount = logginCount;
  this.isloggedIn = isloggedIn;

  this.greeting = function () {
    console.log(`welcome ${this.username}`);
  };
  //   return this
}

const userOne = new User("Deepali", 12, true);
const userTwo = new User("Chai aur Code", 11, false);
console.log(userOne.constructor);
// console.log(userTwo);
