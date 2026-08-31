// filter-->which item should I keep?
//even number
var numbers = [12,24,13,65];
const even_number = numbers.filter((number)=> number%2===0);
console.log(even_number);

//passed score
var scores = [35, 80, 45, 90, 60];
const passed_score = scores.filter((score)  => score>= 50);
console.log(passed_score);

//odd number
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odd_numbers= numbers.filter((number) => number % 2 !== 0);
console.log(odd_numbers)

//greater than 50
var numbers = [45, 89, 90, 76];
let great50 = numbers.filter((number) => number > 50);
console.log(great50);


//passing students
var marks = [35, 89, 49, 39, 23];
let great40 = marks.filter((mark) => mark > 40);
console.log(great40);


//Long name
var names = ["Ajay", "Vishwas", "Rahul", "Alexander", "Neha"];
let longname = names.filter((name) => name.length > 5);
console.log(longname);


//Positive Number
var numbers = [-10, -8, 0, -90, -36, 34, 23, 12, -89];
let positive = numbers.filter((number) => number > 0);
console.log(positive);

//Adult Students
var students = [
    { name: "Ajay", age: 17 },
    { name: "Rahul", age: 21 },
    { name: "Vishwas", age: 20 },
    { name: "Neha", age: 16 }
];
let adult = students.filter((student) => student.age > 18);
console.log(adult);

//Expensive Products
var products = [
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Laptop", price: 50000 },
    {name:"Monitor",price:10000}
]
let expensive = products.filter((product) => product.price > 5000);
console.log(expensive);


//electronics
var products = [
    { name: "Laptop", category: "electronics" },
    { name: "Shirt", category: "clothing" },
    { name: "Mobile", category: "electronics" },
    { name: "Jeans", category: "clothing" }
];
let elec = products.filter((product) => product.category === "electronics");
console.log(elec);


//Filer+condition
var students = [
    { name: "Ajay", marks: 85, age: 17 },
    { name: "Rahul", marks: 35, age: 21 },
    { name: "Vishwas", marks: 42, age: 20 },
    { name: "Rohit", marks: 89, age: 19 }
];
let adult_passed = students.filter((student) => (student.age >= 18) & (student.marks >= 50));
console.log(adult_passed);

var projects = [
    { name: "AI Chatbot", language: "Python", completed: true },
    { name: "Weather app", language: "javascript", completed: false },
    { name: "Expense Tracker", language: "javascript", completed: true }
];
console.log(projects.filter((project) => project.completed));

console.log(projects.map((project)=> project.name));
