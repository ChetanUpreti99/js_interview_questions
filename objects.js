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

