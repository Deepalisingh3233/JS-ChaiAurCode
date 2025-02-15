// Singleton
// Object.create

// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Deepali",
    "full name": "Deepali Singh",
    [mySym]: "myKey1",
    age: 23,
    location: "Kanpur",
    email: "deepali@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "deepali@mightcode.com"
// console.log(JsUser);

// Object.freeze(JsUser)
JsUser.email = "ritesh@mightcode.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
// JsUser.greeting();
console.log(JsUser.greeting);

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
JsUser.greetingTwo();