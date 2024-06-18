// create an array of 5 fruits
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// Iterate over the array using a for loop
// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// using a while loop
// let j = 0;
// while (j < fruits.length) {
//     console.log(fruits[j]);
//     j++;
// }


// Do while loop
// let k = 0;
// do {
//     console.log(fruits[k])
//     k++;
// } while (k < fruits.length);


// for (let fruit of fruits) {
//     console.log(fruit);
// }


// for each loop
//fruits.forEach(fruit => console.log(frtuit));

//map method
let upperCaseFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperCaseFruits);