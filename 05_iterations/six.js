// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) => num > 4)

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const book = [
  {
    title: "Book One",
    genre: "Fiction",
    publish: "1981",
    edition: "2004",
  },
  {
    title: "Book Two",
    genre: "Non-Fiction",
    publish: "1991",
    edition: "2002",
  },
  {
    title: "Book Three",
    genre: "History",
    publish: "1999",
    edition: "2008",
  },
  {
    title: "Book Four",
    genre: "Science",
    publish: "2002",
    edition: "2008",
  },
  {
    title: "Book Fith",
    genre: "Fiction",
    publish: "1989",
    edition: "2003",
  },
  {
    title: "Book Sixth",
    genre: "History",
    publish: "2005",
    edition: "2003",
  },
];

let userBooks = book.filter( (bk) => bk.genre === 'History' )
// userBooks = book.filter( (bk) => { return bk.publish >= 2000 })
userBooks = book.filter( (bk) => bk.publish >= 2000 && bk.genre === 'History')
console.log(userBooks);

