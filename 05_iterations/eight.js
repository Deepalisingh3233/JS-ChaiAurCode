//? reduce
// #region Reduce

const myNums = [1, 2, 3];

// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`Acc: ${acc} and Curval: ${currval}`);

//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "Java Course",
    price: 599,
  },
  {
    itemName: "Python Course",
    price: 5999,
  },
  {
    itemName: "Mobile Application Course",
    price: 6999,
  },
];

// const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
// console.log(priceToPay);


// ! use reduce function to give total of ages

// const ages = [{ age: 23 }, { age: 21 }, { age: 20 }, { age: 10 }];
// const sum = ages.reduce( (acc, item) => acc + item.age, 0)
// console.log(sum);

//! [ 10, 'a', 'b', 0, 0.1, 11, 99, '-', '+', 'xyz' ]
//! use reduce to get the sum of numbers

// const arr = [ 10, 'a', 'b', 0, 0.1, 11, 99, '-', '+', 'xyz' ]

// let result;

// const sumOfNum = arr.reduce( (acc, items) => {

//     if(typeof(items) === 'number'){
//         // console.log(items);
        
//         // console.log(`${items} , acc: ${acc} , items: ${items}`);
//         result = acc + items
//         // console.log(result);
//     }
//     return result;
// }, 0)
// console.log(sumOfNum);

// #region Reduce Practical

// const arr = [ 10, 'a', 'b', 0, 0.1, 11, 99, '-', '+', 'xyz' ]
// const sumOfNum = arr.filter(item => typeof item === 'number').reduce((acc, item) => acc+item, 0)
// console.log(sumOfNum);


let str = ['a', 'b', 'c', 'd', {key:"x"}]

// let strConcat = str.reduce( (acc, curr) => acc+curr)
// console.log(strConcat);


let strConcat = str.reduce((acc, curr) => {
    if (typeof curr === 'object') {
       return acc + curr.key
    }
    return acc + curr
})
console.log(strConcat);