// const tinderUser = new Object() //Singleton Object
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedin = false;
// console.log(tinderUser);

const regularUser = {
  email: "abc@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Ritesh",
      lastname: "Singh",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};

// const obj3  = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "xyz@gmail.com",
  },
  {
    id: 1,
    email: "xyz@gmail.com",
  },
  {
    id: 1,
    email: "xyz@gmail.com",
  },
  {
    id: 1,
    email: "xyz@gmail.com",
  },
];

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedin'));

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstrutor: "Hitesh"
}

// course.courseInstrutor

// const {courseInstrutor} = course
// console.log(courseInstrutor);

const {courseInstrutor: instructor} = course
console.log(instructor);

// {
//     "name": "Ritesh",
//     "coursename": "JS in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]