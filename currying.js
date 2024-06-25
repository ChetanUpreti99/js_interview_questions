/**
 * Question 1: Currying
Explanation: Currying is a technique in functional programming where a 
function with multiple arguments is transformed into a sequence of functions, 
each taking a single argument. This improves compatibility and allows partial application of functions.
 */


/**
 * Question 2: sum(2)(6)(1)
 */



/* function sum(a,b,c) {
    return a+b+c;
}*/

/* function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
console.log(sum(2)(6)(1)); */

/**
 * : Write a currying function evaluate("sum")(4)(2)
 */

/* function evaluate(evaluator) {
    return function (a) {
        return function (b) {
            if (evaluator === "sum") return a + b;
            if (evaluator === "subtract") return a - b;
            if (evaluator === "divide") return a / b;
            if (evaluator === "multiply") return a * b;
        }
    }
}


console.log(evaluate("multiply")(6)(7)) */


/**
 * Question 5: Infinite Currying -> sum(1)(2)(3)....(n)
Explanation: This example illustrates how currying can be used recursively to handle an indefinite 
number of arguments, continually adding them together until a termination condition is met.
 */


/* function sum(a) {
  return function (b) {
    if (b) return sum(a + b)
    return a;
  }
}

console.log(sum(2)(10)(2)()); */


/**
 * Question 6: Currying vs Partial Application
 */


/**
 * Currying and partial application are two techniques used in JavaScript 
 * (and other functional programming languages) to transform functions. 
 * They both help in creating functions with fewer parameters by fixing some of the arguments of the original function,
 *  but they are different in their approach and use cases.

### Currying
Currying is a process in functional programming where a function 
with multiple arguments is transformed into a sequence of functions, 
each taking a single argument. It transforms a function of `n` arguments into `n` functions, each taking one argument.

**Example:**

```javascript
// A function that takes three arguments
function add(a, b, c) {
  return a + b + c;
}

// A curried version of the add function
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}

// Using the curried function
console.log(curriedAdd(1)(2)(3)); // Outputs: 6
```

In the above example, `curriedAdd` transforms the `add` function into a series of functions, each taking one argument.

### Partial Application
Partial application refers to the process of fixing a number of arguments to a function, 
producing another function of smaller arity (fewer arguments). 
It is not limited to a single argument at a time and can fix multiple arguments at once.

**Example:**

```javascript
// A function that takes three arguments
function add(a, b, c) {
  return a + b + c;
}

// A partially applied version of the add function
function partialAdd(a, b) {
  return function(c) {
    return a + b + c;
  }
}

// Using the partially applied function
const addFiveAndSix = partialAdd(5, 6);
console.log(addFiveAndSix(7)); // Outputs: 18
```

In the above example, `partialAdd` creates a new function where the first two arguments are fixed.

### Key Differences
1. **Number of Arguments Fixed**:
   - **Currying**: Transforms a function of `n` arguments into `n` functions, each taking one argument.
   - **Partial Application**: Fixes a number of arguments (can be one or more) and returns 
   a function with the remaining arguments.

2. **Function Transformation**:
   - **Currying**: Always transforms the function into unary functions (one argument per function).
   - **Partial Application**: Transforms the function by fixing some arguments, 
   and the resulting function takes the remaining arguments.

3. **Use Case**:
   - **Currying**: Useful when you want to transform functions into a sequence of 
   unary functions for functional composition or lazy evaluation.
   - **Partial Application**: Useful when you want to create a new function with 
   some arguments pre-set for convenience or reuse.

### Combined Example
Here's an example to illustrate both concepts together:

```javascript
// Original function
function multiply(a, b, c) {
  return a * b * c;
}

// Curried function
function curriedMultiply(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    }
  }
}

// Partially applied function
function partialMultiply(a, b) {
  return function(c) {
    return a * b * c;
  }
}

// Using curried function
const curriedResult = curriedMultiply(2)(3)(4); // 24

// Using partially applied function
const partiallyAppliedResult = partialMultiply(2, 3)(4); // 24

console.log(curriedResult); // Outputs: 24
console.log(partiallyAppliedResult); // Outputs: 24
```

Both techniques can be powerful tools in functional programming, 
offering flexibility in function handling and application.
 */


/**
 * Question 7: Real-world example of currying => Manipulating DOM
Explanation: In this example, currying is used to create a function that updates the text content of an HTML 
element identified by its ID. This showcases a practical application of 
currying in web development for DOM manipulation.
 */

/* function updateElementText(id) {
  return function (text) {
    let element = document.getElementById(id);
    const elem1 = document.getElementById("para");
    console.log(elem1);
    console.log(element);
    element.textContent = text;
  }
}

const updateHeaderContent = updateElementText("heading");
updateHeaderContent("hello Chetan Upreti"); */

/**
 * Question 8: Curry() implementation
Explanation: This code snippet demonstrates a custom implementation of the 
curry function, which transforms a multi-argument function into a curried function, 
enabling partial application and 
composability. It's applied to a simple sum function for demonstration.
 */


/* function someFun(fun) {
  console.log(fun.length);
}


let sum = (a, b, c, d) => a + b + c + d;

someFun(sum); */

function curry(fun) {
  return function curried(...args) {
    if (args.length >= fun.length) {
      return fun(...args);
    } else {
      return function (...next) {
        return curried(...args, ...next);
      }
    }
  }
}

let sum = (a, b, c, d) => a + b + c + d;
let totalSum = curry(sum);
console.log(totalSum(1)(6)(5)(8));