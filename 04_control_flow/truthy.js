const userEmail = "deepali@gmail.com"
if(userEmail){
    console.log("Got user email");
}else{
    console.log("Do not have user email");
}

//! falsy Value
//? false, 0, -0, BigInt 0n, "", null, undefined, NaN

//! truthy Value
//? true, "0", 'false', " ", [], {}, function(){}, 

const myArray = []
if (myArray.length === 0){
   console.log("Array is empty");    
}

const emptyObject = {}
if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
}

//? Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? "deepali" ?? 15

console.log(val1);


//? Ternary Operator 
//? condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");

