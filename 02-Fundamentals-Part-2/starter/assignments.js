'use strict';

// Functions
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descThailand = describeCountry("Thailand", "70", "Bangkok");
const descJapan = describeCountry("Japan", "30", "Tokyo");
const descAustralia = describeCountry("Australia", "40", "Canberra");

console.log(descThailand);
console.log(descAustralia);
console.log(descJapan);
// This also works since calling function is considered an expression
console.log(describeCountry("the USA", "332", "Washington DC"));

// Function Declarations vs. Expressions
function percentageOfWorld(population) {
    return (population / 7900) * 100;
}

console.log(percentageOfWorld(500));
console.log(percentageOfWorld(400));
console.log(percentageOfWorld(300));


const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

// Another way
const percPortugal1 = percentageOfWorld(10);

console.log(percentageOfWorld2(20));


// Arrow Functions
const percentageOfWorld3 = (population) => (population / 7900) * 100;

const peru = percentageOfWorld3(15);
console.log(peru);


// Functions calling other functions
function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld3(population)}% of the world`;
}

// OR
function describePopulation(country, population) {
    const percentage = percentageOfWorld3(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world`;
}

console.log(describePopulation("Thailand", 70))


// Introduction to Arrays
const populations = [10, 20, 30, 40];
console.log(populations.length === 4);

const percentages = [
    percentageOfWorld(populations[0]),
    percentageOfWorld(populations[1]),
    percentageOfWorld(populations[2]),
    percentageOfWorld(populations[3])
];


// Basic Array Operations (Methods)
const neighbours = ['Norway', 'Sweden', 'Russia'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden;';
console.log(neighbours);