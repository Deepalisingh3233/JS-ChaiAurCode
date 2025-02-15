
function sayMyName(){
    console.log(("R"));
    console.log(("I"));
    console.log(("T"));
    console.log(("E"));
    console.log(("S"));
    console.log(("h"));
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result
    // console.log("Deepali")
    return number1 + number2
}

// addTwoNumbers(3, null)
// addTwoNumbers(3, 4)

const result = addTwoNumbers(3, 4)
// console.log("Result ", result);

function loginUserMessage (username = "Sam"){
    // if(username === undefined){
    if(!username){
    
        console.log("Please enter username");
        return   
    }
    return `${username} just logged in`
    
}
// console.log(loginUserMessage("Deepali"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage()) undefine

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 600, 700))
const user = {
    username: "Deepali",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
    username: "Ritesh",
    price: "399"
})

const myNewArray = [200, 300, 400]
function returnSecondValye(getArray){
    return getArray[1]
}

console.log(returnSecondValye(myNewArray));
console.log(returnSecondValye([200, 400, 6000]));
