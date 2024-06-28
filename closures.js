/**
 * scope refers current context of code. either 1. locally  2. globally 3. block defined. 
 *  
 */

//global scope
var userName = "Roadside";

function local() {
	//local scope
	console.log(userName);
}

//ReferenceError: userName is not defined
//console.log(userName);

//local();

/**
*  Lexical scope =>
*  a variable defined outside a function can be accessed inside another function.
*/

//global 
function subscribe() {
	//inner scope 1
	var name = "Chetan"
	function displayName() {
		//inner scope 2
		alert(name);

	}
	displayName();
	console.log("hye")

}

//subscribe();

/**
 * a closure is combination of a function bundled together(enclosed) with references to its surrounding state
 * (the lexical environment). In the other words, a closure gives you access to outer function's scope  from inner function
 *  every closure has three scopes: 
 * 	Local
 *  Outer function
 *  Global function
 */

/**
 * Closure Scope Chain.
 */


// global scope
const e = 10;
function sum(a) {
	return function (b) {
		return function (c) {
			// outer functions scope
			return function (d) {
				// local scope
				return a + b + c + d + e;
			};
		};
	};
}

//console.log(sum(1)(2)(3)(4)); // 20


/* let count = 0;
(
	function printCount() {
		if (count === 0) {
			let count = 1; //shadowing
			console.log(count);
		}
		console.log(count);
	}
)()
 */


/* function createBase(num) {
	return function add(numberToBeAdded) {
		return num + numberToBeAdded;
	}

}
var addSix = createBase(6);
console.log(addSix(10)); */


//time optimization

/* function find(index) {
	let a = [];
	for (let i = 0; i < 1000000; i++) {
		a[i] = i * i;
	}
	console.log(a[index]);
} */


/* function find() {
	let a = [];
	for (let i = 0; i < 1000000; i++) {
		a[i] = i * i;
	}

	return function (index) {
		return a[index];
	}
}

let findIndexValue = find();

console.time("6");
console.log(findIndexValue(6));
console.timeEnd("6");


console.time("12");
console.log(findIndexValue(12));
console.timeEnd("12");
 */


// Question 6 : Block scope and set Time out

// using let
/* function a() {
	for (let i = 0; i < 3; i++) {
		setTimeout(function () {
			console.log(i)  // 0,1,2
		}, i * 1000);
	}
}
a();  */// using let will give you 0 , 1 ,2

// using var
/* for (var i = 0; i < 3; i++) {
	function inner(i) {
		setTimeout(function () {
			console.log(i)  // 0,1,2
		}, i * 1000);

	}
	inner(i);
}

*/

//Question 7: How would you create a private counter using closure?

/* function counter() {
	let _counter = 0;

	function add(increment) {
		_counter = _counter + increment;
	}

	function retrieve() {
		return 'Counter = ' + _counter;
	}

	return {
		add,
		retrieve
	}
}

const c = counter();

c.add(5)
c.add(10)

console.log(c.retrieve()); */

//Explain the Module Pattern and provide an example.


/**
the module pattern in JavaScript is a design pattern used to create encapsulated and reusable code. 
It allows you to organize your code into self-contained modules, 
each with its own scope, avoiding polluting the global namespace. 
This pattern leverages closures to achieve privacy and provide a public interface.

Here’s a breakdown of how the module pattern works and how to implement it:

### Characteristics of the Module Pattern

1. **Encapsulation:** Modules encapsulate their data and methods, exposing only what is necessary.
2. **Private and Public Members:** You can define private variables and functions that 
are not accessible from outside the module, while exposing a public API.
3. **Reusability:** Modules can be reused across different parts of your application.

### Implementation

Here’s a simple example of the module pattern using an Immediately Invoked Function Expression (IIFE):

```javascript
const myModule = (function() {
  // Private variables and functions
  let privateVariable = 'I am private';

  function privateFunction() {
	console.log(privateVariable);
  }

  // Public API
  return {
	publicMethod: function() {
	  privateFunction();
	},
	publicVariable: 'I am public'
  };
})();

// Usage
myModule.publicMethod(); // Outputs: 'I am private'
console.log(myModule.publicVariable); // Outputs: 'I am public'
// console.log(myModule.privateVariable); // Uncaught ReferenceError: privateVariable is not defined
// myModule.privateFunction(); // Uncaught TypeError: myModule.privateFunction is not a function
```

### Explanation

1. **IIFE (Immediately Invoked Function Expression):** The module is created using an IIFE,
 which runs as soon as it is defined. This creates a new scope, encapsulating the module’s private members.
2. **Private Members:** Variables and functions defined inside the IIFE are private to the module.
3. **Public API:** An object is returned from the IIFE, 
exposing only the public members. This object forms the module’s public interface.

### Modern JavaScript (ES6 Modules)

With ES6, JavaScript introduced native modules, which provide a more standard way to achieve modularity:

#### Module Definition (module.js)
```javascript
// Private members
const privateVariable = 'I am private';

function privateFunction() {
  console.log(privateVariable);
}

// Public API
export const publicVariable = 'I am public';

export function publicMethod() {
  privateFunction();
}
```

#### Module Usage (main.js)
```javascript
import { publicMethod, publicVariable } from './module.js';

publicMethod(); // Outputs: 'I am private'
console.log(publicVariable); // Outputs: 'I am public'
```

ES6 modules naturally encapsulate their scope, making it easier to manage dependencies and reuse code.

### Conclusion

The module pattern in JavaScript helps in organizing code, preventing global namespace pollution,
 and creating reusable components. While the traditional module pattern using IIFE is still useful, 
 ES6 modules provide a more standardized and powerful way to achieve modularity in modern JavaScript applications.
 */


// Question 9: How can you ensure a function runs only once using closure?

/* let view;
function likeTheVideo() {
	let count = 0;
	return () => {
		if (count == 0) {
			view = "Roadside Coder";
			console.log("Subscribe to " + view);
			count++;
		}
	}
}

let isSubscribe = likeTheVideo();
isSubscribe();
isSubscribe();
isSubscribe();
isSubscribe(); */


/**
Question 10: Explain the Once Polyfill using closure.
Explanation: The once function creates a closure that allows a given function to be executed only once. 
Upon the first call, 
the original function runs, and subsequent calls return the 
result of the initial execution, demonstrating how closure can control function execution.
 */

/* 
function once(func, context) {
	let rn;
	return function () {
		if (func) {
			rn=func.apply(context || this, arguments);
			func = null
		}
		return rn;
	}
}

let hello = once(
	(a, b) => console.log('hello ' + a, b)
)


hello(1, 3);
hello(1, 3);
hello(1, 3);
hello(1, 3);
hello(1, 3);
 
*/

/**
Question 11: What is Memoize Polyfill, and how does it use closure?
Explanation: The myMemoize function is a memoization polyfill that caches function results based on arguments, 
using closure to store and retrieve cached values efficiently. This improves performance by avoiding redundant 
computations for repeated function calls with the same arguments.
 */




function myMemoize(func, context) {
	const res = {};
	return function (...args) {
		let argsCache = JSON.stringify(args);
		if (!res[argsCache]) {
			res[argsCache] = func.call(context || this, ...args);
		}
		return res[argsCache];
	}
}



const clumsyProduct = (num1, num2) => {
	for (let i = 1; i <= 100000000; i++) {
	}
	return num1 * num2;
}

const myMemoizeProduct = myMemoize(clumsyProduct)


console.time("1");
console.log(myMemoizeProduct(3, 4));
console.timeEnd("1");

console.time("2");
console.log(myMemoizeProduct(8, 9));
console.timeEnd("2");


console.time("3");
console.log(myMemoizeProduct(3, 4));
console.timeEnd("3");


console.time("4");
console.log(myMemoizeProduct(8, 9));
console.timeEnd("4");



/**
 * Question 12: Differentiate between Closure and Scope.
Explanation: Closure refers to a function's ability to retain access
to variables from its lexical scope even after that scope has closed, while scope refers to the visibility
and accessibility of variables within a specific context, 
such as global scope, function scope, or block scope.
 */

function checkClosure() {
	let count = 0;
	function increment() {
		count = count + 1
		console.log(`count: ${count}`)
	}

	function decrement() {
		count = count - 1;
		console.log(`count: ${count}`)
	}

	return {
		increment,
		decrement
	}
}

let { increment, decrement } = checkClosure();

increment();
increment();
decrement();
decrement()