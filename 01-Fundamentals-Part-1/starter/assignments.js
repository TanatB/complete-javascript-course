// Values and Variables
// let country = "Thailand";
// let continent = "Asia";
let population = 70_000_000;

// console.log(country);
// console.log(continent);
console.log(population);

// Data Types
let isIsland = false;
let language;

console.log("Data Types")
console.log(typeof isIsland);
console.log(typeof population);
// console.log(typeof country);
console.log(typeof language);

// let,const and var
language = "Thai";
const country = "Thailand"
const continent = "Asia";

console.log(typeof country);
console.log(typeof continent);
console.log(population);

// country = "Australia"; 
// assignments.js:29 Uncaught TypeError: Assignment to constant variable. at assignments.js:29:9

// Basic Operators
console.log(population / 2);

// console.log(population + 1);
population++;
console.log(population);

console.log(population > 6_000_000);

console.log(population > 33_000_000);

let description = "Portugal is in Europe, and its 11 million people speak portuguese"

let description1 = country + " is in " + continent + ", and its " + (population / 1_000_000) + " million people speak " + language;

console.log(description1);

// Strings and Template Literals
description = `${country} is in ${continent}, and its ${population / 1_000_000} million people speak ${language}`;

// Taking Decisions: if / else Statements
if (population > 33_000_000) {
    console.log(`${country}'s population is ${33 - population / 1_000_000} million below average`);
} else {
    console.log(
        `${country}'s population is ${33 - population} million
    below average`
    );
}

// Type Conversion & Coercion
console.log('9' - '5'); // -> ?
console.log('19' - '13' + '17'); // -> ?
console.log('19' - '13' + 17); // -> ?
console.log('123' < 57); // -> ?
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ?

// Equality Operators: == vs. ===
const numNeighbours2 = prompt("How many neighbour countries does your contry have?");

const numNeighbours = Number(prompt("How many neighbour countries does your contry have?"));

if (numNeighbours == 1) {
    console.log("'Only 1 border!");
} else if (numNeighbours > 1) {
    console.log("More than 1 border");
} else {
    console.log("No borders");
}


// Logical Operators
if (language === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

// switch statement
switch (language) {
    case "chinese":
    case "mandarin":
        console.log("MOST number of native speakers!");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("Number 4");
        break;
    case "arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
}

// The Conditional (Ternary) Operator
console.log(`${country}'s population is ${population > 33_000_000 ? "above" : "below"} average`)