//numbers
let balance = 120;
let anotherBalance = new Number(120);

// console.log(balance);
// console.log(typeof balance);
// console.log(typeof anotherBalance);
// console.log(anotherBalance);
let isActive = true;
let isReallyActive = new Boolean(true); //not recommended to use Boolean object
//null and undefined
let firstName = null;
let lastName = undefined;
// console.log(firstName);
// console.log(lastName);

//strings
let firstName1 = "John";
let lastName1 = "doe";
let fullName = firstName1 + " " + lastName1;
let greeting = `Hello ${firstName1} ${lastName1}`;
let anotherFullName = `${firstName1} ${lastName1}`;
// console.log(greeting);
let hiThere = `Hi there, ${anotherFullName}`;
// console.log(hiThere);

let sm1 = Symbol("Kawthar");
let sm2 = Symbol("Kawthar");
console.log(sm1 === sm2); //false
console.log(sm1);
