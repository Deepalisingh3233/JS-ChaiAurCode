//? for of loop

const arr = [1, 2, 3, 4, 5, "Deepali"]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greets of greetings) {
    // console.log(`Each char is ${greets}`);
}

//? Map ==> No duplicacy and orderd

const map  = new Map()
map.set('IN', 'India')
map.set('USA', 'United State of America')
map.set('Fr', 'France')
// console.log(map);

for (const [key, value] of map) {
    // console.log(key + " :- " + value);
    console.log(key, " :- ", value);
    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
// for (const [key, value] of myObject) {
//     console.log(key, " : ", value);
