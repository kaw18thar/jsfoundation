let genericAuto = {
  tyres: 4,
  radio: true,
};
let tesla = {
  driver: "ai",
};
Object.setPrototypeOf(tesla, genericAuto);
console.log(tesla);
let myObject = Object.getPrototypeOf(tesla);
console.log(myObject);
