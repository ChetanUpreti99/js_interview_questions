//Objects in JS
/**
 * An object is a collection of properties, 
 * and a property is an association between 
 * a name (or key) and a value. 
 * A property's value can be a function, in which case the property is known as a method.
 */

const func = (function (a) {
    // a is local variable. delete use for delete property from objects.
    delete a;
    return a;
})(5);

console.log(func); //5

//dynamic property
let property = "firstName";
let value = "chetan";
const user = {
    "like this video": true,
    [property]: value
}

// user[property] = value;

for (const key in user) {
    if (Object.hasOwnProperty.call(user, key)) {
        const element = user[key];
        console.log(element);
    }
}

console.log(user["like this video"], user);


//Output's
const obj = {
    a: "one",
    b: "two",
    a: "three"
}

console.log(obj);

//create a function multiplyByTwo(obj) that multiply all numeric property values of nums by 2
let num = {
    a: 100,
    b: 200,
    title: "my nums"
}

function multiplyByTwo(obj) {
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            if (typeof element === 'number') {
                obj[key] = element * 2;
            }
        }
    }
}

multiplyByTwo(num);
console.log(num);

//output

const a = {};
const b = { key: "b" };
const c = { key: "c" };
a[b] = 123;
a[c] = 456;


console.log(a[b]); //456
console.log(a) // { ["object Object"]:456 }

//JSON.stringify and JSON.parse

//convert an object to string use JSON.stringify and if string like object to object use JSON.parse.
//use case
let user_1 = {
    name: "chetan"
}

//localStorage.setItem('test', user_1);
//save as [object Object] type conversion reason
localStorage.setItem('test', JSON.stringify(user_1));

let user_1_from_local = localStorage.getItem('test');
console.log(JSON.parse(user_1_from_local));

//output
console.log([...'chetan']);
//['c','h','e','t','a','n']

//output
const user_2 = { name: 'chetan', age: 25 };
const admin = { admin: true, ...user_2 };

console.log(`admin`, admin);

//output
const settings = {
    userName: 'chetan',
    age: 25,
    health: 45
}

const data = JSON.stringify(settings, ['age', 'health']); //only stringify 2 keys of objects
console.log(data);

//output

const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius //here this is window
}
console.log(shape.diameter()); //20
console.log(shape.perimeter()); //NaN

//destructuring of an objects?

const user_3 = {
    name: 'Chetan',
    age: 25,
    fullName: {
        first: 'Chetan',
        last: 'Upreti'
    },
}

const { name: myName } = user_3;
console.log(myName);


const { fullName: { first, last } } = user_3;
console.log(`first`, first, `last`, first);


//output

// A rest parameter must be last in a parameter list. 
function getItems(fruitLists, favFruit, ...args) {
    return [...fruitLists, ...args, favFruit];

}

console.log(getItems(['banana', 'apple'], 'mango', 'kivi'));


//output
let c_1 = { name: 'chetan' };
let d_1 = c_1; //same reference

c_1.name = 'hye';
console.log(d_1.name) //hye


console.log({ a: 1 } == { a: 1 });
console.log({ a: 1 } === { a: 1 });

//both object point diff memory so both are false. object are only equal when then both reference the same memory

//output

let person = { name: 'chetan' };
const members = [person];
person = null;

console.log(members);

/*
[
    {
        "name": "chetan"
    }
] */

//person.name = null if we change variable property then it will change

/* 
[
    {
        "name": null
    }
] */


const value_1 = { number: 10 };
//using spread operator object was clone not referenced.
const multiply = (x = { ...value_1 }) => {
    console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value_1);
multiply(value_1);

//output

function changeAgeAndReference(person) {
    //same reference change here
    person.age = 35;
    //reassign variable so new memory will create for object.
    person = {
        name: "JHON",
        age: 50
    }
    return person;
}

const personObj_1 = {
    name: "chetan",
    age: 45
}

const personObj_2 = changeAgeAndReference(personObj_1);

console.log(personObj_1);
/* 
{
    "name": "chetan",
    "age": 35
}
 */
console.log(personObj_2);
/*
{
    name: "JHON",
    age: 50
}
*/

//shallow copy and Deep copy or clone copy

//shallow copy - when we copy one object to another then some of property has same reference
//Deep copy or clone copy - another object has no reference for 1st object where it made

let user_4 = {
    name: "chetan",
    age: 23,
    fullName: {
        first: 'chetan',
        last: "upreti"
    }
}

//1. NOT DEEP

// let objClone_1 = Object.assign({}, user_4); //will not clone nested objects
// objClone_1.name = 'upreti'
// objClone_1.age = 45;
// objClone_1.fullName.first = 'ram'
// console.log(user_4, objClone_1);

//2. DEEP
// let objClone_2 = JSON.parse(JSON.stringify(user_4));
// objClone_2.name = 'upreti'
// objClone_2.age = 45;
// objClone_2.fullName.first = 'ram'
// console.log(user_4, objClone_2);

//3. NOT DEEP
let objClone_3 = { ...user_4 };
objClone_3.name = 'upreti'
objClone_3.age = 45;
objClone_3.fullName.first = 'ram'
console.log(user_4, objClone_3);

