const name = "Deepali"
const repoCount = 20

// console.log(name + repoCount + "value");

//  String interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Deepali-Singh-Ritesh')

// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('S'));

console.log(`Lenght => ${gameName.length}`);

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-13,3)
console.log(anotherString)

const newStringOne = "  Ritesh  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://deepali.com/deepali%20singh"

console.log(url.replace('%20', '-'));
console.log(url.includes('ritesh'));

console.log(gameName.split("-"))

// console.log(Number.MAX_VALUE);
// console.log(Number.NaN);
