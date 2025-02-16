let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  //   var c = 30;
//   console.log("Inner - > ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Deepali"

    function two(){
        const website = "Youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()

if(true){
    const username = "Ritesh"
    if(username === "Ritesh"){
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);  
}
// console.log(username);


// +++++++++++++++++intersting++++++++++++++++++

console.log(addOne(5));

function addOne(num){
    return num + 1
}
// console.log(addOne(5));

console.log(addTwo(5));

const addTwo = function(num){
    return num + 2
}
addTwo(5)

