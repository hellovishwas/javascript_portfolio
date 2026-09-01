//conditional statements(if ,else if, else)


let projectCount =0;

if (projectCount>0){
    console.log("Projects available");
}else{
    console.log("No project yet");
}


//number (positive,negative,zero)
const prompt = require('prompt-sync')();
var n=Number(prompt("Enter a number"));   //user input
if (n>0){
    console.log("positive number");
}

else if(n<0){
    console.log("negative no.");
}

else{
    console.log("Zero");
}

//Even or Odd
var n = Number(prompt("Enter a number:"));
if (n >= 0) {
    if (n % 2 == 0) {
        console.log("even number");
    }
    else {
        console.log("odd number");
    };
}
else {
    console.log("Give positive no.")
};

//voting eligibility
const prompt = require("prompt-sync")();
var age = Number(prompt("Enter a number:"));
if (age >= 18) {
    console.log("eligible to vote")
}
else {
    console.log("not eligible")
};

//Greater no.

var a = 10;
var b = 80;
if (a > b) {
    console.log('a is greater')
}
else {
    console.log("b is greater")
};

//Pass or Fail
var marks = 30;
if (marks > 33) {
    console.log("Pass")
}
else {
    console.log('Fail')
};

//grade calculator
const prompt = require("prompt-sync")();
var marks = Number(prompt("Enter a Number"));
if (marks <= 100 && marks>=0) {
    if (marks >= 90) {
        console.log(`A`)
    }
    else if (marks >= 80) {
        console.log(`B`)
    }
    else if (marks >= 70) {
        console.log(`C`)
    }
    else if (marks >= 60) {
        console.log(D)
    }
    else {
        console.log("Fail")
    };
}
else {
    console.log("Give Valid NO.")
};

//Login check
let set_username = "vishwas";
let set_password = "1234";
const prompt = require("prompt-sync")();
let username = prompt("Enter username:");
let password = prompt("Enter password");
if (username == set_username && password == set_password) {
    console.log("Login Successful")
}
else {
    console.log("Invalid username or password")
};

//Discount eligibility
const prompt = require("prompt-sync")();
let costumer_name = prompt("Enter name").toLowerCase();
let disc = Number(prompt("Enter the purchase amount:"));
let members = ["ajay", "suresh", "mahesh", "satish"];
if (disc >= 500 || members.includes(customer_name)) {
    console.log("10% discount")
}
else {
    console.log("No discount")
};



