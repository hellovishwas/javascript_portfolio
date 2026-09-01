//functions
function greet(name){
    return `Hello ${name}!`;
};
console.log(name);

console.log(Age);
console.log(greet("Vishwas"));
console.log(greet("Rahul"));


//add two no.
function add(a,b){
    return a+b;
};
const result = add(10, 5);
console.log(result);

//square of two numbers
function square(n) {
    return n**2
};
console.log(square(10));

//Even and Odd number
function CheckEvenOdd(n) {
    if (n % 2 == 0) {
        return ("Even Number")
    }
    else {
        return ("Odd Number")
    }
};
console.log(CheckEvenOdd(80));

//find the largest

function max(n, m, o) {
    if (n > m && n > o) {
        return n
    }
    else if (m > o) {
        return m
    }
    else {
        return o
    };
};
console.log(max(20, 8, 90));

//Calculate Percentage
function percentage(obtained, total) {
    return obtained / total * 100
};
console.log(percentage(80, 100));

//array function
function findmax(n) {
    return Math.max(...n)   //... =>spread operator
};
console.log(findmax([1, 2, 3, 4]));

//calculator
function calculator(n, m, o){
    if (o == "+") {
        return n+m
    }
    else if (o == "-") {
        return n-m
    }
    else if (o == "*") {
        return n*m
    }
    else if (o == "/") {
        return n/m
    }
    else {
        return 'invalid operator'
    };
};
console.log(calculator(90, 45, "/"));
