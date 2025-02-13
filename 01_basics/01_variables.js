const accountID = 144353
let accountEmail = "deepali@mightcode.com"
var accountPassword = "12345"
accountCity = "Kanpur"
let accountSate;

//? accountID = 1  Not allowed
accountEmail = "abc@gmail.com"

accountPassword = "2121212"

accountCity = "Lucknow"

console.log(accountID);

/*
Prefer not use var
Because of issue in block scope and functional scope
*/
console.table([accountEmail, accountID, accountPassword, accountCity, accountSate])