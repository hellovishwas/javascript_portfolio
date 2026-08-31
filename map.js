//map-->for transformation of every element
// double the no.
var number = [1, 2, 3, 4];
var doubled = number.map((number) => number * 2);
console.log(doubled);

//cube
var m = [2, 4, 6, 8];
var cube = m.map((m) => m ** 3);
console.log(m);
console.log(cube);

//increment
var prices = [100, 200, 300];
var increase = prices.map((price) => price + (price * (10 / 100)));
console.log(increase);

//square
var number = [1, 2, 3, 4, 5];
var square = number.map((num) => num ** 2);
console.log(square);

//add10
var numbers = [10, 20, 30, 40, 50];
var add10 = numbers.map((num) => num + 10);
console.log(add10);

//convert to uppercase
var letters = ["v", "p", "i", "o", "j"];
var upper = letters.map((letter) => letter.toUpperCase());
console.log(upper);

//Calculate prices with tax
var prices = [33, 22, 11, 44, 55, 90];
const tax = prices.map((price) => price * 11 / 10);
console.log(tax);

//Convert to string
var numbers = [10, 20, 30, 400];
const strings = numbers.map((number) => String(number));
console.log(strings);

//Extract Students
let Students = [
    { name: "Ajay", lastname:"Chouhan",age: 20, marks: 90 },
    { name: "Rahul",lastname:"Shrivastav", age: 21, marks: 98 },
    { name: "Vedik",lastname:"Sharma", age: 30, marks: 88 }
];
//fullname
let fullname = Students.map((student) => student.name + " " + student.lastname);
console.log(fullname);
//Students
let names = Students.map((student) => student.name);
console.log(names);
//calculate total marks
let score = Students.map((mark) => mark.marks);
console.log(score);

//Transform Products
let products = [
    { name: "laptop", price: 50000 },
    { name: "mouse", price: 10000 },
    { name: "keyboard", price: 20000 }
];

let transform_array = products.map((product) => {
    return {
        name: product.name,
        price: product.price,
        discountPrice:product.price * (9 / 10)
    };
});
console.log(transform_array);






