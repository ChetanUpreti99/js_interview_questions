// Everything in Javascript is an Object

let obj = {
    name: "Piyush Agarwal",
    age: 25,
};

//Object.prototype
//obj.__proto__

let num = 10.3;
// console.log(num.__proto__); // Number.prototype
// console.log(num.__proto__.__proto__); // Object.prototype
let name = "RoadsideCoder";

// console.log(name.__proto__.__proto__); // Object.prototype
let bool = true;
// console.log(bool.__proto__.__proto__); // Object.prototype

function add(a, b) {
    return a + b;
}

// console.log(add(1, 2));
// console.log(add.__proto__); // Function.prototype
// console.log(add.__proto__.__proto__); // Object.prototype


// Prototype Chaining

let person = {
    name: "Piyush Agarwal",
    age: 25,
    /*  toString: () => {
         console.log("converts to string");
     }, */
};

// let additional = {
//   name: "Piyush",
//   username: "RoadsideCoder",
//   alias: function () {
//     console.log(`${this.name} is also known as ${this.username}`);
//   },
// };

// person.__proto__ = additional;
// console.log(person.alias());
//console.log(person.toString());

// Prototype Inheritance


function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hye my name is ${this.name}`)
}

let chetan = new Person("chetan");

chetan.greet();

/**
Person is a constructor function.
Person.prototype has a method greet.
alice is an instance of Person.
alice.__proto__ points to Person.prototype.
*/

function Student(name, subject) {
    Person.call(this, name);
    this.subject = subject;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;


Student.prototype.study = function () {
    console.log(this.name + " is studying " + this.subject);
};
let bob = new Student("Bob", "Math");
bob.greet();   // Output: Hello, my name is Bob
bob.study();   // Output: Bob is studying Math

/**
Student inherits from Person.
Student.prototype.__proto__ points to Person.prototype.
bob.__proto__ points to Student.prototype.
This forms a prototype chain: bob -> Student.prototype -> Person.prototype.
 */




// Ques 1: What will be the output of the following code?

function Vehicle() { }
Vehicle.prototype.drive = function () {
    console.log("Driving a vehicle");
};

function Car() { }
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.drive = function () {
    console.log("Driving a car");
};

var vehicle = new Vehicle();
var car = new Car();

vehicle.drive(); //"Driving a vehicle"
car.drive(); //"Driving a car"


// Ques 2: Explain the difference between __proto__ and prototype in JavaScript.

// - **`__proto__`**: It is an object property that points to the prototype of the object.
//                    It is used for inheritance and allows accessing the prototype chain.
// - **`prototype`**: It is a property that exists on constructor functions and is used to
//                   set up inheritance for objects created by that constructor function.
//   It defines properties and methods shared by all instances created by that constructor function.



// Ques 3: What is setPrototypeOf?

// Define a prototype object
var animalPrototype = {
    sound: function () {
        console.log("Making a sound...");
    },
};

// Create an object with animalPrototype as its prototype
var dog = Object.create(animalPrototype);



// Create another object with a different prototype
var cat = {
    purr: function () {
        console.log("Purring...");
    },
};

Object.setPrototypeOf(dog, cat);

console.log(dog);
dog.purr(); // Output: Purring...



// Ques 4: What is instanceof?
function Animal(name) {
    this.name = name;
}
Animal.prototype.sayName = function () {
    console.log("My name is " + this.name);
};

var animal1 = new Animal("Tiger");

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
    console.log("Woof!");
};

var dog1 = new Dog("Max", "Labrador");

Array.prototype.myArr = function () {
    console.log("This is my array " + this);
};

const arr = [1, 2, 3];

console.log(dog1 instanceof Animal); //true

console.log(arr instanceof Array);


// Ques 5: How can you create an object without a prototype in JavaScript?

var obj1 = Object.create(null);
// console.log(obj1.toString());


// Ques 6: What will be the output of the following code?
function A() { }
A.prototype.foo = 10;

function B() { }
B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;
B.prototype.foo = 20;

function C() { }
C.prototype = Object.create(B.prototype);
C.prototype.constructor = C;
C.prototype.foo = 30;

var obj1 = new A();
var obj2 = new B();
var obj3 = new C();

console.log(obj1.foo);
console.log(obj2.foo);
console.log(obj3.foo);


// Ques 7: Deep Clone an object in JS

function deepClone(obj) {
    if (obj2 === null || obj === undefined || typeof obj != "object") {
        return obj2;
    }

    var clone = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }

    return clone;
}

var obj2 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4],
    },
};

var clonedObj = deepClone(obj2);
clonedObj.b.c = 3;
console.log(`clonedObj`, clonedObj, `obj2`, obj2);

//const obj3 = structuredClone(obj2);