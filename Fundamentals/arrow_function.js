//arrow function
const sum =(a,b) => a+b;
console.log(sum(1,4));

//square of two no.
const square=(x)=>x**2;
console.log(square(6));

//Greeting
const greet = (name) => `hello ${name}`;
console.log(greet("vishwas"));

//largest no.
const max = (a, b) => { if (a > b) {return a } else {return b } };
console.log(max(10, 20));
//or
const max = (a, b) => (a > b ? a : b);//ternary operator(? :)
console.log(max(10, 20));


//Percentage
const Percent = (obtain, total) => obtain / total * 100;
console.log(Percent(90, 100));

//find maximum
const max = (a) => Math.max(...a);
console.log(max([1, 2, 3, 4, 3, 2, 3, 4, 3, 1, 3, 10]));

//count Even number
const countEven = (n) => {
    let count = 0;
    for (let num of n) {
        if (num % 2 === 0) {
            count++;
        }
    }
    return count;
};
console.log(countEven([1, 2, 3, 4]));


//calculator

const cal = (a, b, o) => {
    if (o === "+") {
        return a + b
    }
    else if (o === "-") {
        return a - b
    }
    else if (o === "*") {
        return a * b
    }
    else if (o === "/") {
        return a / b
    }
    else {
        return "Invalid operator"
    }
};
console.log(cal(1, 2, "+"));


