// for loop
for (let i = 1; i <= 5; i++){
    console.log(i);
}

//while loop
var i = 1;
while (i <= 5); {
    console.log(i);
    i++
};

// loop with array
var fruits = ['apple', 'banana', 'mango'];
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}


var i=0
while (i < fruits.length) {
    console.log(fruits[i]);
    i++
};



//for...of
var fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
    console.log(fruit);
}
//while
var i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}


//do...while
var i = 1;
do {
    console.log(i);
    i++;

} while (i <= 5);

// break
for (let i = 1; i <= 10; i++){
    if (i === 5) {
        break;
    }
    console.log(i);
}

//continue
for (let i = 1; i <= 5; i++){
    if (i === 3) {
        continue;
    }
    console.log(i);
}


// Print 1 to 10
for (i = 1; i <= 10; i++){
    console.log(i)
};

// Print 10 to 1
for (i = 10; i >= 1; i--) {
    console.log(i)
};

//Print Even Number
for (i = 1; i <= 20; i++){
    if (i % 2 === 0) {
        console.log(i)
    }
};

//Print Odd number

for (i = 1; i <= 20; i++){
    if (i % 2 !== 0) {
        console.log(i)
    }
};

//sum from 1 to 10
sum = 0;
for (i = 1; i <= 100; i++){
    sum = sum + i
};
console.log(sum);

//Multiplication Table
const prompt = require("prompt-sync")();
var number = Number(prompt("Enter a number:"));
for (i = 1; i < 11; i++){
    console.log(`${number} x ${i} = ${number*i}`)
};

// Array + loops
var fruits = ["Apple", "Banana", "Mango", "Orange"];
for (fruit of fruits) {
    console.log(fruit)
};

//Find sum of Array
var numbers = [10, 20, 30, 40, 50];
sum=0
for (number of numbers) {
    sum=number+sum
};
console.log(sum);

//Find largest number
var numbers = [25, 78, 12, 95, 43];
max=0
for (number of numbers) {
    if (number > max) {
        max=number
    }
};
console.log(max);

//Student Result
var students = [
    { name: "Ajay", marks: 80 },
    {name: "Rahul", marks: 35},
    { name: "Vishwas", marks: 90 },
    {name:"Neha",marks:25}
];
for (student of students) {
    if (student.marks >= 40)
        console.log(`${student.name}-->Pass`)
    else {
        console.log(`${student.name}-->Fail`)
    };
};

//Find Highest Marks Student
max = 0
var max_student
for (student of students) {
    if (student.marks >= max) {
        max = student.marks
        max_student=student
    }
};
console.log(max_student);





