//object literals

var student={name:"Vishwas",age:20,course:"B.Tech",marks:93}

//Access properties
//1.Dotnotation
console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(student.marks);
//2.Bracket notation
console.log(student["name"]);
console.log(student["age"]);
console.log(student["course"]);
console.log(student["marks"]);

// update property
student.marks=90;
console.log(student)

//Add property
student.city="Indore"
console.log(student);



//delete property
delete student.age;
console.log(student);


//Method-->function in object
var student = {
    name: "Vishwas", age: 20,
    introduce() { console.log(`My name is ${this.name} and I am ${this.age} years old`) }
};
student.introduce();

//Nested object
var student = {
    name: "Vishwas",
    age: 20,
    Address: { city: "Indore", state: "M.P." }
};
console.log(student.Address.city);
console.log(student.Address.state);

//Array of objects
let students = [
    { name: "Ajay", marks: 56 },
    { name: "Rahul", marks: 89 },
    { name: "Vishwas", marks: 67 },
    { name: "Neha", marks: 75 }
];


//filter objects
let dist_students = students.filter((student) => student.marks >= 75);
console.log(dist_students);

//Map objects
var products = [
    { name: "Laptop", price: 5000 ,Qty:1},
    { name: "Mouse", price: 1000,Qty:2 },
    { name: "Keyboard", price: 2000,Qty:1 }
];
let updated = products.map((product) => { return { name: product.name, price: product.price, Qty: product.Qty, disountprice: (9 / 10) * product.price } });
console.log(updated);

//reduce Objects
let bill = products.reduce((accumulator, product) => product.Qty * product.price + accumulator, 0);
console.log(bill);
let most_expensive = products.reduce((accumulator, product) => Math.max(accumulator, product.price),0);
console.log(most_expensive);
let total_quantity = products.reduce((accumulator,product) => product.Qty + accumulator, 0);
console.log(total_quantity);

