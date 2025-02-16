const user = {
  username: "Ritesh",
  price: "999",

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Deepali"
//     console.log(this.username);
    
// }
// chai()

// const chai = function(){
//     let username = "Deepali"
//         console.log(this.username)
// }

const chai = () => {
    let username = "Deepali"
        console.log(this)
}

// chai()

// Explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit return
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "Ritesh"})


console.log(addTwo(3, 4));


// const myArray = [2, 3, 6, 7, 1]

// myArray.forEach()