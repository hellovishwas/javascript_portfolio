// Data types and variables(let,const)
// Declare a variable name and store your name in it.
// Declare a variable age and store your age.
const name = "Vishwas";
let Age = 20;
const isstudent = true;

console.log(typeof name);
console.log(typeof Age);
console.log(typeof isstudent);

// Create three variables: firstName, lastName, and age
const firstname = "vishwas";
const lastname = "sharma";
let age = 20;
console.log(firstname);
console.log(lastname);
console.log(age);


// Declare a variable using let, then change its value.
let n = 10;
n = 10;
console.log(n);


// Declare a variable using const. Try changing its value. What happens?
const l = 10;
l = 20;
console.log(l);//Assignment to constant variable.

// Create a variable city without assigning a value. Print it.
const city;
console.log(city)

// Create a variable score with value 100, then increase it to 150
let score = 100;
score = 150;
console.log(score);


//Swap the values of two variables without using third variable
let a = 10;
let b = 20;
a = a + b;
b = a - b;
a = a - b;
console.log(a);
console.log(b);


// Create a variable containing your full name using a template literal.
const fullname = `vishwas sharma`;
console.log(fullname);

// Create one variable for each primitive data type:

// String
let j = 'jatin';
console.log(typeof j);

// Number
let n = 10;
console.log(typeof n);

// Boolean
const isstudent = true;
console.log(typeof isstudent);

// Undefined
let placeholder;
console.log(placeholder);
console.log(typeof placeholder);

// Null
let degree = null;
console.log(degree);
console.log(typeof degree);

// BigInt
let m = 144n;//It is created by appending an n to the end of an integer.
console.log(typeof m)

// Symbol
let uniqueID = Symbol("id");
console.log(uniqueID);

// Create a variable containing a decimal number and check its type
var f = 1.2;
console.log(typeof f);//number

//Create an array containing 5 programming languages. Check its type using typeof
let lang = ["Javascript", "CSS", "HTML", "Python", "SQL"];
console.log(lang);
console.log(typeof lang);//object

//type conversion

console.log(Number("50"));
console.log(Number(""));
console.log(Number("vishwas"));
console.log(String(null));
console.log("10" - 8);
console.log(null + 2);
console.log(undefined + 5);
console.log(typeof NaN);





