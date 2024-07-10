//Scope
//certain place where defined variable exists and can be recognized.


function check() {
    if (true) {
        //function scope
        var v = "chetan"
    }
    console.log(v);
}
check();

//global scope
var name = "chetan";
//var is function scope


function name() {
    //function scope
}

//block scope
{
    var a = 5; // due to function scope.
    let b = 9;
    console.log(b);
}

console.log(a); //5
//console.log(b); //ReferenceError: b is not defined

//variable shadowing

function test() {
    let a = 6;
    if (true) {
        let a = 'test';
        console.log(a); //variable shadowing
    }
    console.log(a);
}

test();


//illegal variable shadowing

/* let test2 = () => {
    let a = 6;
    var b = 6;
    if (true) {
        var a = 'test';
        let b = '5';
        console.log(a); //Uncaught SyntaxError: Identifier 'a' has already been declared
        console.log(b);
    }
    console.log(a);
} */

//test2();


//legal
var a_1;
var a_1;

// let b_1;
// let b_1;  //Uncaught SyntaxError: Identifier 'a' has already been declared;

// const c_1;
// const c_1; //Uncaught SyntaxError: Missing initializer in const declaration


// const a_2 = 5;
// a_2 = 9; //Uncaught typeError: Assignment to constant variable.

//hoisting
//on creation phase JS engine moves all variables and functions top that is known as hoisting.

/**
 * JS execution context.
 * creation phase
 * execution phase
 */


console.log(a_3);
console.log(b_3); //Uncaught ReferenceError: cannot access b_3 before initialization.
var a_3 = 5;
let b_3 = 9; //hoist but in temporal dead zone
//temporal dead zone is the time between declaration and initialization of let and const variable.
//is the term to define when variables are in scope but not declared yet.





