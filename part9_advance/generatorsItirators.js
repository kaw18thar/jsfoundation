function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
  yield 100;
}

let gen = generateNumbers();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
let genTwo = generateNumbers();
console.log(genTwo.next().value);
console.log(genTwo.next().value);
console.log(genTwo.next().value);
console.log(genTwo.next().value);
