//this keyword in JS (Implicit Binding)
//Explain this keyword?
/**
 * this is used to reference something like object.
 * The value of this is determined by how a function is called (runtime binding). 
 * So, there are two types of binding when it comes to object binding in JS, 
 * one is implicit and other is explicit.
 */


let a = 5

console.log(this.a); //undefined

const c = 5

console.log(this.c); //undefined

var b = 8;

console.log(this.b); //8


function myFunction() {
    console.log(this)
}
myFunction(); // window object if there is no . notation that means window object (owner of the function call is window)


//It takes it's this from the outer “normal” function, 
//this won't make much sense now, since as you can see it’s also pointing to window object.
const myFun = () => {
    console.log(this)
}
myFun(); // window object


let user = {
    name: "Chetan",
    age: 24,
    getDetails() {
        console.log(this.name); //Chetan
    }
};

user.getDetails();


let user_1 = {
    name: "Piyush",
    age: 24,
    childObj: {
        newName: "Roadside Coder",
        getDetails() {
            console.log(this.newName, "and", this.name); // Roadside Coder and undefined
        }
    }
};

user_1.childObj.getDetails();


let user_3 = {
    name: "Piyush",
    age: 24,
    getDetails: () => {
        console.log(`here`, this.name);  //
    }
};

user_3.getDetails();


let user_4 = {
    name: "Chetan",
    age: 24,
    getDetails() {
        const nestedArrow = () => console.log(this.name); //Chetan
        nestedArrow();
    }
};


user_4.getDetails();

class user_5 {
    constructor(n) {
        this.name = n
    }
    getName() {
        console.log(this.name);
    }
}

const User = new user_5("Chetan_u") // => This will generate a user object from the above class
User.getName();



//output
const user_6 = {
    firstName: 'Piyush!',
    getName() {
        const firstName = 'Jen!';
        return this.firstName; //this inside the method equals object
    }
};
console.log(user_6.getName()); //Piyush!


//What is the result of accessing its ref? Why?

function makeUser() {
    return {
        name: "John",
        ref: this //window object
    };
}

let user_7 = makeUser();

console.log(`user_7`, user_7.ref.name); // user_7 

//to solve it

function makeUser_2() {
    return {
        name: "John",
        ref() {
            return this; //now object point to self
        }
    };
}

let user_8 = makeUser_2();

console.log(`user_8`, user_8.ref().name); // user_8 John


//output
const user_9 = {
    name: 'Piyush Agarwal!',
    logMessage() {
        console.log(`line 144`, this.name)
    }
};

setTimeout(user_9.logMessage, 1000);

//here in setTimeout passing function works like call back function so that this refers to window.
//to solve
setTimeout(user_9.logMessage(), 1000); //call on point

setTimeout(
    function () {
        user_9.logMessage()
    }, 1000);


//output 
const user_10 = {
    name: 'Piyush',
    greet() {
        return `Hello, ${this.name} !`;
    },
    farewell: () => {
        return `Goodbye, ${this.name} !`
    }
};

console.log(user_10.greet());  //Hello Piyush
console.log(user_10.farewell()); //Goodbye 


/* Question 6

Create an object `calculator` with three methods:
- `read()` prompts for two values and saves them as object properties with names `a` and `b` respectively.
- `sum()` returns the sum of saved values.
- `mul()` multiplies saved values and returns the result. 

*/


let calculator = {
    a: 0,
    b: 0,
    read() {
        this.a = +prompt("a=", 0);
        this.b = +prompt("b=", 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
}
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());




//  Question 7 Give output of the following code snippet.
var length = 4;
function callback() {
    console.log(this.length);// What is logged? 
}
const object = {
    length: 5,
    method(fn) {
        fn();
    },
    method_2() {
        console.log(`arguments`, arguments);
        arguments[0](); //4 arguments is an array and it also and object so it print length of his property.
    }
}
object.method(callback);

object.method_2(callback, 0, 8, 7);

//`callback()` is called using regular function invocation inside `method()`. 
//Since this value during a regular function invocation equals the global object, 
//`this.length` is evaluated as `window.length` inside `callback()` function.


// ### Question-9 Write the implementation of this calc()

const calc = {
    total: 0,
    add(a) {
        this.total = this.total + a;
        return this;
    },
    multiply(a) {
        this.total = this.total * a;
        return this;
    },
    subtract(a) {
        this.total = this.total - a;
        return this;
    },
}
const result = calc.add(10).multiply(5).subtract(30).add(10)
console.log('here is your total', result.total);

