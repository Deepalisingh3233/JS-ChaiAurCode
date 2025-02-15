const marvel_heros = ["thor", "Ironman","Spiderman"]
const dc_heros = ["superman", "flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all__new_heros = [...marvel_heros, ...dc_heros]
// console.log(all__new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// console.log(another_array);

const real__another_array = another_array.flat(Infinity)
console.log(real__another_array);

console.log(Array.isArray("Deepali"))
console.log(Array.from("Deepali"))
console.log(Array.from({name: "Ritesh"})) // interesting 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3))