'use strict';

// 221. Constructor Functions & the `new` Operator

// constructor function (Arrow function doesn't work)
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method instead constructor function (bad habit)
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

// const tanat = new Person('Tanat', 1998);
// console.log(tanat);

// // 4 steps happen when instantiated
// //  1. New {} is created
// //  2. function is called, `this` keyword = {}
// //  3. {} linked to prototype
// //  4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// const jay = 'Jay';
// console.log(tanat instanceof Person);
// console.log(jay instanceof Person);

// // 222. Prototypes
// console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// tanat.calcAge();
// matilda.calcAge();

// // prototype property of tanat object (constructor function)
// console.log(tanat.__proto__);
// console.log(tanat.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(tanat));
// // prototype != the exact constructor function object (Person in this case)
// console.log(Person.prototype.isPrototypeOf(Person));

// // set properties
Person.prototype.species = 'Homo Sapiens';
// console.log(tanat, matilda);
// console.log(tanat.species, matilda.species);

// console.log(tanat.hasOwnProperty('firstName'));
// console.log(tanat.hasOwnProperty('species')); // False

// // 223. Prototypal Inheritance & The prototype Chain

// // 224.
// console.log(tanat.__proto__);
// console.log(tanat.__proto__.__proto__); // Object.prototype
// console.log(tanat.__proto__.__proto__.__proto__); // Null

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 4, 5, 32, 3, 7, 8]; // same as new Array
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

// console.log(arr.unique()); // you should not do this

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. 
    The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, 
    and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, 
    and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' 
    multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.brake();

// 226. ES6 Classes

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  // for 227.
  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // 228. Static method
  static hey() {
    console.log('Hey there 🖐️');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();

// // proof
// console.log(jessica.__proto__ === PersonCl.prototype);

// // add method manually
// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };

// jessica.greet();

// 1. Classes are NOT hoisted (even if they are decorated)
// 2, Classes are first-class citizens
// (we can pass them into function & return them to functions)
// 3. Classes are executed in strict mode (even if we don't activate it)

// 227. Setters & Getters
const account = {
  owner: 'Jonas',
  movements: [200, 500, 600, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// For classes
// console.log(jessica.age);
const walter = new PersonCl('Walter White', 1965);
// console.log(walter);

// 228. instance method
Person.hey = function () {
  console.log('Hey there 🖐️');
};

// PersonCl.hey();

// 229. Object.create (the least used)
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
// console.log(steven);
// Not ideal but we'll fix it later
steven.name = 'Steven';
steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__);
// console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// 231. Inheritance between "classes": Constructor Functions
const Student = function (firstName, birthYear, course) {
  //   this.firstName = firstName;
  //   this.birthYear = birthYear;
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

// Why wouldn't we do:
// Student.prototype = Person.prototype;    // wrong!!

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person); // True since linking prototype

Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD 
    "class" of Car. Besides a make and current speed, the EV also has the current battery charge 
    in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets 
    the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and 
    decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, 
    with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' 
    and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! 
    HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// 3 (Polymorphism)
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}`,
  );
};

// 2
const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();

// 233. Inheritance Between "Classes": ES6 Classes
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always need to happen first!
    super(fullName, birthYear);
    // Then we can access the new parameter
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  // Overwrite the calcAge()
  calcAge() {
    console.log(
      `I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`,
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// console.log(martha);
// martha.introduce();
// martha.calcAge();

// 234.
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();
// console.log(jay);

// 235.
class Account {
  // Public field
  locale = navigator.language;
  bank = 'Bankist';
  // Private field
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface (API) of the object
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  // Private method
  #approveLoan(val) {
    // Fake method for now
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
  // Static method
  static test() {
    console.log('TEST');
  }

}

const acc1 = new Account('Tanat', 'THB', 1234);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

// 236 Data Encapsulation

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// 5) STATIC version of these 4 (not focused)
console.log(acc1);
// console.log(acc1.#movements);
