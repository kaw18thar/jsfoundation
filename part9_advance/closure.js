function outer() {
  counter = 4;
  return function () {
    counter++;
    return counter;
  };
}
let calls = outer();
console.log(calls());
console.log(calls());
console.log(calls());
console.log(calls());
