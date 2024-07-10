// MAP, FILTER & REDUCE Interview Questions

// Question 1 : Array.map()
/*
const nums = [1, 2, 3, 4];
let multiplyByThree = nums.map((num, i, arr) => {
    console.log(i, arr);
    return num * 3;
})
console.log(`multiplyByThree`, multiplyByThree);
*/

// Question 2 : Array.filter()
/*
let filterArray = multiplyByThree.filter((num, i) => {
    return num > 6;
})
console.log(`filterArray`, filterArray);
*/


// Question 3 : Array.reduce()
/*
const total = nums.reduce((acc, num, i, arr) => {
    return acc + num;
}, 0)
console.log(`total`, total);
*/


// Question 4 : Map Polyfill
/*
Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let index = 0; index < this.length; index++) {
        const element = cb(this[index], index, this)
        temp.push(element);
    }
    return temp;
}
const nums = [1, 2, 3, 4];
let multiplyByThree = nums.myMap((num, i, arr) => {
    console.log(i, arr);
    return num * 3;
})
console.log(`multiplyByThree`, multiplyByThree);
*/

// Ques 5 : Filter Polyfill

/*
Array.prototype.myFilter = function (cb) {
    let temp = [];
    for (let index = 0; index < this.length; index++) {
        const isTrue = cb(this[index], index, this)
        if (isTrue) {
            temp.push(this[index]);
        }
    }
    return temp;
}
const nums = [1, 2, 3, 4];
let filterArray = nums.myFilter((num, i, arr) => {
    console.log(i, arr);
    return num >= 3;
})
console.log(`multiplyByThree`, filterArray);
*/


// Question 6 : Reduce Polyfill
/* 
const nums = [1, 2, 3, 4];
Array.prototype.myReduce = function (cb, initialValue) {
    let acc = initialValue;

    for (let index = 0; index < this.length; index++) {
        acc = acc ? cb(acc, this[index], index, this) : this[index];

    }
    return acc;
}
const total = nums.myReduce((acc, num, i, arr) => {
    return acc + num;
}, 0)
console.log(`total`, total); 
*/

let students = [
    { name: "Piyush", rollNumber: 31, marks: 80 },
    { name: "Jenny", rollNumber: 15, marks: 69 },
    { name: "Kaushal", rollNumber: 16, marks: 35 },
    { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

// Q1 - Return only the names of students in capital

/*
let nameStudentArray = students.map((student) => {
    return student.name.toUpperCase();
})

console.log(`nameStudentArray`, nameStudentArray);
*/

// Q6 - print the total marks of the students with marks greater than 60 after 
//20 marks has been added to those students who scored less than 60.

const total = students.map((student) => {
    if (student.marks < 60) {
        student.marks += 20
    }
    return student;
})
    .filter((student) => {
        return student.marks > 60
    })
    .reduce((acc, student) => {
        return acc + student.marks
    }, 0
    )
console.log(`total`, total);

// Question 7 : map vs foreach

/**
 * `map` and `forEach` are both array methods in JavaScript, but they 
 * serve different purposes and have different characteristics. Here’s a detailed comparison:

### `map` Method

1. **Purpose**: 
   - `map` is used to create a new array by applying a function to each element of an existing array.
   
2. **Return Value**:
   - Returns a new array with the results of calling a provided function on every element in the calling array.
   
3. **Immutability**:
   - Does not modify the original array; it creates and returns a new array.

4. **Chaining**:
   - Supports method chaining because it returns a new array.

5. **Usage Example**:
   ```javascript
   const numbers = [1, 2, 3, 4];
   const doubled = numbers.map(num => num * 2);
   console.log(doubled); // [2, 4, 6, 8]
   console.log(numbers); // [1, 2, 3, 4] - original array remains unchanged
   ```

6. **Syntax**:
   ```javascript
   array.map(callback(element, index, array), thisArg);
   ```

### `forEach` Method

1. **Purpose**: 
   - `forEach` is used to execute a provided function once for each array element.
   
2. **Return Value**:
   - Returns `undefined`.
   
3. **Immutability**:
   - Does not create a new array. It simply executes the provided function 
   for each element of the array. Any changes must be made within the function itself.

4. **Chaining**:
   - Does not support method chaining because it returns `undefined`.

5. **Usage Example**:
   ```javascript
   const numbers = [1, 2, 3, 4];
   numbers.forEach((num, index, arr) => {
       arr[index] = num * 2;
   });
   console.log(numbers); // [2, 4, 6, 8] - original array is modified
   ```

6. **Syntax**:
   ```javascript
   array.forEach(callback(element, index, array), thisArg);
   ```

### Key Differences

1. **Return Value**:
   - `map` returns a new array, while `forEach` returns `undefined`.

2. **Chaining**:
   - `map` can be chained with other array methods, whereas `forEach` cannot because it doesn't return the array.

3. **Modification**:
   - `map` does not modify the original array; it creates a new one. 
   `forEach` can modify the original array if you change its elements within the callback function.

4. **Use Case**:
   - Use `map` when you need to transform elements and obtain a new array.
   - Use `forEach` when you need to perform an action with each element but do not need a transformed array.

### When to Use Each

- **Use `map`** when:
  - You need to derive a new array based on the original array.
  - You want to perform operations on each element and return the result.
  - Example: Converting an array of strings to an array of numbers.

- **Use `forEach`** when:
  - You need to perform side effects or operations that do not require returning a new array.
  - You are iterating through the array just for the purpose of executing some code on each element.
  - Example: Logging each element to the console.

### Conclusion

- **`map`** is suitable for transforming data and creating new arrays.
- **`forEach`** is suitable for executing side effects and does not return a new array.

Both methods are powerful and useful, but they serve different purposes. 
Choosing the right one depends on what you need to accomplish in your code.
 */