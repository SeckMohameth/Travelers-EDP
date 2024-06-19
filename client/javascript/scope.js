// global scope

let globalVar = "I am global";

function showMessage() {
    console.log(globalVar); //accessible here
}

showMessage() // Outputs I am global
console.log(globalVar); // also accessible here

//local scopre
function greet(){
    let greeting = "Hello World";
    console.log(greeting); // available here
}

greet()// outputs: Hellow world
console.log(greeting); //error is not defined

//block scope
if(true) {
    let blockVar = "I am inside a block"
    console.log(blockVar); //only available here
}