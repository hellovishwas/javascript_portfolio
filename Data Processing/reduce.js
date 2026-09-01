// reduce


//sum
const digits = [10, 20, 30, 40];
var total = digits.reduce((accumulator, digit) => accumulator + digit, 0);
console.log(total);

//Product
var numbers = [10, 20, 30, 40, 50];
let product = numbers.reduce((accumulator, number) => accumulator * number,0);
console.log(product);

//Maximum
var numbers = [12, 45, 78, 92, 83, 110,90];
let maximum = numbers.reduce((accumulator, number) => Math.max(accumulator, number),0);
console.log(maximum);


//count even numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 78, 99, 90];
let even_num = numbers.reduce((accumulator, number) => {
    if (number % 2 === 0) {
        return accumulator + 1
    }
    else {
         return accumulator
    };
},0);
console.log(even_num);

//Sum of even numbers
var numbers = [20, 10, 30, 15, 30, 35];
let sum_even = numbers.reduce((accumulator, number) => {
    if (number % 2 === 0) {
        return accumulator + number
    }
    else {
        return accumulator
    };
}, 0);
console.log(sum_even);

//Total Price
var products = [
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 10000 }
];
let total = products.reduce((accumulator, product) => accumulator + product.price, 0);
console.log(total);

//Total Students marks
var students = [
    { name: "Ajay", marks: 80 },
    { name: "Rahul", marks: 90 },
    { name: "Vishwas", marks: 99 }
];
let total_marks = students.reduce((accumulator, student) => accumulator + student.marks, 0);
console.log(total_marks);

//Highest marks
var students = [
    { name: "Vishwas", marks: 80 },
    { name: "Rahul", marks: 95 },
    { name: "Vishwas", marks: 90 },
    { name: "Neha", marks: 88 }
];
let highest_marks = students.reduce((accumulator, student) => {
    if (accumulator.marks > student.marks) {
        return accumulator
    }
    else {
        return student
    }
});
console.log(highest_marks);

//Shopping cart total
var cart=[
    {name:"Laptop",price:50000,quantity:1},
    {name:"Mouse",price:1000,quantity:2},
    {name:"keyboard",price:2000,quantity:1}
];
let bill=cart.reduce((accumulator,product)=>(product.price)*(product.quantity)+accumulator,0);
console.log(bill);




