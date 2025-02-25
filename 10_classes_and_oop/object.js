function multipleBy5(num) {
  return num * 5;
}

// multipleBy5(3)
multipleBy5.power = 2;
console.log(multipleBy5(4));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
    
}
const chai = new createUser("Chai", 25);
const tea = createUser("Tea", 250);

chai.printMe()


/*
    Here's what happens behind the sceen when the new keyword is used: 

    A new object is created: The new keyword initiates the creation of a new javaScript object.

    A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

    The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value os specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

    The new object is returned: After the constructor function has been called, if it is doesn't return a non-primitive value (Object, Array, function, etc), the newly created object is returned.
*/
