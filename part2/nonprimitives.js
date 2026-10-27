const username = {
  "first name": "Kawthar",
  isloggedIn: true,
};
username["first name"] = "miss K."; //updating the value of firstName property it allows us to do that eventhough username is declared as constant because we are not changing the reference of the object but we are changing the value of the property of the object
// console.log(username["first name"]); //Kawthar
username.lastName = "AlHarbi     "; //adding a new property to the object
// console.log(username.firstName, username.lastName); //{}
// console.log(username); //{ firstName: 'miss K.', isloggedIn: true, lastName: 'AlHarbi     ' }
let today = new Date();
// console.log(today.getDate());
let heros = new Array("a", "b", "c", true);
// console.log(heros);
let anotheruser = ["Jaber", true];
// console.log(anotheruser[0]); //Jaber
console.log(1 + "1"); //prints 11
