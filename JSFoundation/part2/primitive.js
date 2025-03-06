//Number
let balance = 120;
let anotherBalance = new Number(120);
console.log(balance);
console.log(anotherBalance.valueOf());
console.log(typeof balance);
console.log(typeof anotherBalance);
//Boolean
let isActive = true;
let isReallyActive = new Boolean(true);

//null and undefined
let firstname = null;
let lastname = undefined;
console.log(firstname);
console.log(lastname);

//String
let myString = "hello";
let myStringOne = "Hola";
let username = "sharmin";
let oldGreet = myString + " " + "sharmin";
console.log(oldGreet);
let greetMessage = `Hello ${username}!`;
console.log(greetMessage);
let demoOne = `Value is ${2 * 2}`;
console.log(demoOne);
let sm1 = Symbol("sharmin");
let sm2 = Symbol("sharmin");
console.log(sm1 == sm2);
