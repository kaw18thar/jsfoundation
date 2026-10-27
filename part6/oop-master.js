let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
// console.log(car.start());
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let john = new Person("John Doe", 20);
// console.log(john.name + john.age);
function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};
Array.prototype.km = function () {
  return `Custom method ${this}`;
};

let myArray = [1, 2, 3, 4];
// console.log(myArray.km());
let myNewArray = [1, 2, 3, 4, 5, 6, 7];
// console.log(myNewArray.km());
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}
class Car extends Vehicle {
  drive() {
    return `${this.make}: This is an inheritance example`;
  }
}
let myCar = new Car("Lexus", "ls");
// console.log(myCar.start());
// console.log(myCar.drive());
let vehOne = new Vehicle("Toyota", "Hilux");
// console.log(vehOne.make);
//Encapsulation. It is restricting access to data objects within the class #balance is encapsulated
class BankAccount {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance() {
    return `$ ${this.#balance}`;
  }
}
let myAccount = new BankAccount();
// console.log(myAccount.getBalance());

class CoffeeMachine {
  start() {
    return `the machine is starting now`;
  }
  brew() {
    return `Brewing coffee`;
  }
  pressButton() {
    let msg1 = this.start();
    let msg2 = this.brew();
    return `${msg1}.. ${msg2}`;
  }
}
let myCoffeeMachine = new CoffeeMachine();
// console.log(myCoffeeMachine.pressButton());

class Bird {
  fly() {
    return `Flying... `;
  }
}
class Penguin {
  fly() {
    return `Penguins can't fly.`;
  }
}
let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());
// polymorphism means that the function fly redefined  in a class that inherits the class it was already defined in. it was defined two times in the parent class and the son class (informal definition)
class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary can't be negative");
    }
    this.name = name;
    this._salary = salary;
  }
  get salary() {
    return this._salary;
  }
  set salary(value) {
    if (value < 0) {
      return `Salary can not be negative`;
    } else {
      this._salary = value;
    }
  }
}
// let emp = new Employee("John", -20000);
// console.log(emp.salary);
// emp.salary = -7000;
// console.log(emp.salary);

class Circle {
  area(r) {
    return 3.14 * (r * r);
  }
}

class Rectangle {
  area(l, w) {
    return l * w;
  }
}
let circ = new Circle();
console.log(circ.area(3));
let rec = new Rectangle();
console.log(rec.area(3, 2));
