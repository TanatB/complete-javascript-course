'use strict';

// JavaScript Definition

// 1. High-Level

// 2. Garbage-collected

// 3. Interpreted or just-in-time compiled

// 4. Multi-paradigm
// 4.1 Procedural Programming
// 4.2 OOP
// 4.3 Functional Programming

// 5. Prototype-based Object-Oriented

// 6. First-class Functions (Treated functions as variables)

// 7. Dynamically Typed

// 8. Single-threaded

// 9. Non-blocking event loop

// // 97: Scoping in Practice
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);

//   function printAge() {
//     const output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Steven';
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       // What if we redefine variable (move the code line below up & down)
//       const output = 'NEW OUTPUT';
//     }

//     //console.log(str);
//     console.log(millenial);
//     // console.log(add(2,3));
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// 98 Variable Environment: Hoisting and The TDZ (ES6)
// 99. Hoisting & Temporal Dead Zone in practice.

// // Hoisting with variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// // Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// // var will set function as undefined first
// var addArrow = (a, b) => a + b;

// // Example
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// 100. `this` keyword
