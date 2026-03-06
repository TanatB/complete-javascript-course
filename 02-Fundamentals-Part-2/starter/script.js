// Activate Strict Mode for the entire script (Easier to avoide accidental errors)
'use strict';

let hasDriversLicense = false;
const passTest = true;

// Simple Bug
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = 'Audio'; // Caused SyntaxError (interface is reserved keyword)'

// 34. Functions
function logger() {
    console.log("My name is Bright");
}

logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0); // Does not log return value
console.log(appleJuice);
console.log(fruitProcessor(5, 0)); // log both local scope log & return value but no storing

const appleOrangeJuice = fruitProcessor(2, 4);