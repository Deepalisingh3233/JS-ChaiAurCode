let myName = "Deepali   ";
let myChannel = "Chai   ";

// console.log(myName.trim().length);
// console.log(myName.truelength);

let myHeros = ["Thor", "Spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.deepali = function () {
  console.log(`Deepali is present in all object`);
};

Array.prototype.heyDeepali = function () {
  console.log(`Deepali says hello`);
};
// heroPower.deepali()
// myHeros.deepali();
// myHeros.heyDeepali()
// heroPower.heyDeepali()

// inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isavailable: true,
};

const TASupport = {
  makeAssignment: "JavaScript",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode   ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(` True length is ${this.trim().length}`);
};

anotherUsername.trueLength();
"Ritesh".trueLength()
"iceTea".trueLength()