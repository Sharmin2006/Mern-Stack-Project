//Checking if a number is greater than another number
let num1 = 5;
let num2 = 8;
if (num1 > num2) {
  console.log("num 1 is greater than num 2");
} else {
  console.log("Nope, num1 is NOT greater");
}
console.log("I am regular bottomcode");

//Checking if a string is equal to another string
let username = "riya";
let anotherusername = "riya";
if (username == anotherusername) {
  console.log("Pick another username");
} else {
  console.log("You can pick this username");
}

//Checking if a variable is a number or not
let score = "44";
if (typeof score === "number") {
  console.log("Yep,this is a number");
} else {
  console.log("No that isnot a number");
}

//Checking if a boolean value is true or false
let isTeaReady = false;
if (isTeaReady) {
  console.log("Tea is ready");
} else {
  console.log("Tea is NOT ready");
}

//Checking if an array is empty or not
let items = [];
console.log(items.length);
if (items.length) {
  console.log("Array is empty");
} else {
  console.log("Array is not empty");
}
