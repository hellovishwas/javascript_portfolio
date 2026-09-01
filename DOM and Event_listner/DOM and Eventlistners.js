//DOM SELECTOR
// var paragraph=document.getElementById("para")//selects by id
// var nam=document.getElementsByClassName("name");//selects by class name
// var button = document.querySelectorAll("#name");//it selects all with the class name
const greet = document.querySelector("#name");//it selects only first one
const nam = document.getElementsByTagName("h1")

// Eventlistner
marks=Number(inputbox.value)
greet.addEventListener("click", () => {
    console.log(`WELCOME! ${nam[0].textContent}`)
});

const button=document.querySelector("#checkbox")
const input=document.querySelector("#inputbox")
const Result = document.querySelector("#result")

button.addEventListener("click", () => {
    const marks=Number(input.value)
    if (input.value === "") {
        Result.textContent = "Please enter your marks!"
        Result.style.color = "blue"
    }
    else if (marks >=0 & marks <= 100) {
        if (marks >= 90) {
            Result.textContent = ("Excellent!")
            Result.style.color = "Green"
        }
        else if (marks >= 70) {
            Result.textContent = ("Good!")
            Result.style.color = "Yellow"
        }
        else {
            Result.textContent = ("Try to improve!")
            Result.style.color = "Red"
        };
    }
    else {
        Result.textContent = "Please enter valid no.!"
        Result.style.color="Brown"
    };

});

//Information about the event happens when click on button
button.addEventListener("click", (event) => {
    console.log(event);
});
