function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}
let teaOrder1 = makeTea("Matcha");
// console.log(teaOrder);

function teaOrder(teaType) {
  function confirmOrder() {
    return `Order confirmed for chai`;
  }
  return confirmOrder();
}
let myTea = teaOrder("chai");
// console.log(myTea);

const calculatePrice = (price, quantity) => price * quantity;

function calculate(price, quantity) {
  return price * quantity;
}
let prc = calculatePrice(499, 2);
// console.log(prc);
function makeTea(teaType) {
  return `makeTea ${teaType}`;
}
function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}
let order = processTeaOrder(makeTea);
// console.log(order);
function whatAmI(input) {
  if (typeof input === "number") {
    return "I'm a number";
  }
  if (typeof input === "string") {
    return "I'm a string";
  } else return "I'm something else";
}
// console.log(whatAmI(true));
function flipBoolean(input) {
  return !input;
}
// console.log(flipBoolean(0));

function stringToNumber(input) {
  return Number(input);
}
// console.log(stringToNumber("11"));
function isItTruthy(input) {
  if (Boolean(input) === true) {
    return "It's truthy!";
  } else return "It's falsey!";
}
// console.log(isItTruthy(1));
// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add(x, y) {
  return x + y;
}
// console.log(add(a, b));
arr = [100, 2, 3000, 4, 5, 6];
function findMax(arr) {
  let max = 0;
  for (let num of arr) {
    if (num > max) {
      max = num;
    } else continue;
  }
  return max;
}
// console.log(findMax(arr));
let arrc = [
  [3, 4],
  [5, 7],
  [7, 8],
];
function flattenArray(arr) {
  let farr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      farr.push(arr[i][j]);
    }
  }
  return farr;
}
// console.log(flattenArray(arrc));
arr = [1, 1, 2, 3, 3, 4, 4];
// function removeDuplicates(arr) {
//   let double1 = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] && arr[i] === arr[i + 1]) arr.splice(i + 1, 1);
//   }
//   return arr;
// }
function removeDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i] && i !== j) {
        arr.splice(j, 1);
      } else continue;
    }
  }
  return arr;
}
// console.log(removeDuplicates(arr));
const person = { name: "Hitesh", age: 19.5 };

function outer() {
  function introduce(person) {
    return `Hi, my name is ${person.name} and I am ${person.age} years old`;
  }
  return introduce(person);
}
let greet = outer();
// console.log(greet);
function processTeaOrder(teafun) {
  return teafun("earl grey");
}
function makeTea(teatype) {
  return `making ${teatype}`;
}
let order1 = processTeaOrder(makeTea);
console.log(order1);
const newArray = arr.map((currentValue) => {
  return currentValue * 2;
});
console.log(newArray);
