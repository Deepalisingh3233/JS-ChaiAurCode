//? Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);

// const myCreatedDate = new Date(2025, 1,13)
// console.log(myCreatedDate.toDateString());

// const myCreatedDate = new Date(2025, 1, 13, 6, 5)
// console.log(myCreatedDate.toLocaleString())

// const myCreatedDate = new Date("2025-02-13")
// console.log(myCreatedDate.toLocaleString())

const myCreatedDate = new Date("02-13-2025")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth()  + 1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    day: "2-digit",
    month: "long",
    year: "numeric"
}));

