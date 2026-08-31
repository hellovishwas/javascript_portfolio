//array

let skills = ["Python", "Git", "Linux", "HTML", "CSS"];
console.log(skills.length);   //length of array
console.log(skills[0]);  //indexing


// update by methods or using indexing

skills[0] = "python";   //update the value
skills.push("java");    //Add "Java" at the end
skills.pop();           //Remove the last element
skills.unshift("C++");  //"C++" at the beginning.
skills.shift();         //Remove the first element
console.log(skills);
console.log(skills.indexOf('HTML'));//searching
console.log(skills.includes("CSS"));//check whether exists or not

