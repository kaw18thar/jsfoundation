function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  return `hello ${this.name}`;
};
let hitesh = new Person("Hitesh");
console.log(hitesh.greet());
