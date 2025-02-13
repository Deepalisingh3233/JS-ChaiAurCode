
//? Primitive Data Types
//? 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const soreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')

// console.log(Id);
// console.log(anotherId);

console.log(Id === anotherId);

const bigNumber = 2342354236458776476n
// console.log(typeof bigNumber);
 


//? Reference Type (Non-Primitive)
//? Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Deepali",
    age: 23,
}

const myFunction = function(){
    // console.log("Hello World");   
}

// console.log(typeof myFunction) //? function
// console.log(typeof myObj) //? object (object function)
// console.log(typeof heros) //? object
// console.log(typeof Id) //? symbol

// ++++++++++++++++++++++++++++++++++++++++++++++++=

//? Memory -> Stack (Primitive  ) , Heap (Non-primitive)

let myYoutubeName = "Deepali Sigh"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;
userTwo.email = "usertwo@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
