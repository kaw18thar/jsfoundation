let person = {
  name: "Hitesh",
  greet() {
    console.log(`hello I am ${this.name}`);
  },
};
person.greet();
let greeting = person.greet;
greeting();
let greetPro = person.greet.bind({ name: "kawthar" });
greetPro();
