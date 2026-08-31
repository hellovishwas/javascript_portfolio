//comparison operators
console.log(10 === "10");//compare value and type both
console.log(10 == "10");//compare value
console.log(10 !== 10);
console.log(10 === 10);
console.log(10 > 12);
console.log(10 < 12);
console.log(10 <= 12);
console.log(10 >= 12);

//Arithemetic Operators
let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//increment and decrement
let x = 10;
let y = ++x;//prefix increment-->increment first then return the value
console.log(x);//11
console.log(y);//11

let a = 10;
let b = a++;//post increment
console.log(a);//10
console.log(b);//11


//assignment operators
let x = 20;
console.log(x %= 1);
console.log(x += 1);
console.log(x -= 1);
console.log(x *= 1);
console.log(x /= 1);


//Logical AND and OR and NOT
let age = 18;
let ID = 123;
console.log(age >= 18 && ID === 122);//and
console.log(age >= 18 || ID === 122);//or
console.log(!!age==18);

let isloggedin = false;
console.log(!isloggedin);//true
console.log(!!isloggedin);//false'







