
// Explain function overloading in ts

/**
 * function overloading in ts allows us to define multiple signatures of a single function,providing
 * diff parameter types and returns type based on input
 * this is useful in libraries where we want to offer flexible functionality
 * without requiring users to understand underlying implementation details 
 */

function getMessage(name: string): string;
function getMessage(name: string[]): string[];

function getMessage(name: unknown): unknown {
    if (typeof name === "string") {
        return name;
    } else if (Array.isArray(name)) {
        return name.map((name) => `Hello, ${name}`)
    }
    throw new Error("invalid name")
}

// Usage
console.log(getMessage('Kiran')); // Hello Kiran
console.log(getMessage(['Kiran', 'John'])); // ['Hello, Kiran', 'Hello John']


// Explain how you will use extends keyword for conditional types in ts


// extends can be used if we need to add some logic in our types for conditional types
// 1. ternary logic with extends

type NumberFormType<T> = T extends number ? number : never;

type num = NumberFormType<23>;
type txt = NumberFormType<"chetan">;

//union with extends

type NullableNumber = number | null | undefined;
type CustomNullable<T> = T extends null | undefined ? never : T;

type RealNumber = CustomNullable<NullableNumber>;

type RealNumber1 = CustomNullable<4.5>


// Explain how you will use infer keyword in ts
// Explain how will you use infer with four examples: 
//create your own ReturnType helper, Get type of first arg in a function, 
//get promise return type and get array item types

// infer is used with extends to infer the return type and return the return type
// Ex 1: create your own ReturnType helper


type CustomReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type w = CustomReturnType<() => any>;
type s = CustomReturnType<() => void>;
type q = CustomReturnType<() => string | number>;
type r = CustomReturnType<() => boolean>;


// Ex 2: Get type of first arg as type

type GetFirstArg<T> = T extends (firstArg: infer R, ...args: any[]) => any
    ? R
    : never;


type a = GetFirstArg<(fullName: string, age: number) => void>;

// Ex 3: Promise return type

type PromiseReturnType<T> = T extends Promise<infer R> ? R : T;
type b = PromiseReturnType<Promise<string>>;

// Ex 4: Array Item types

type ArrayItemsTypes<T> = T extends (infer arrItem)[] ? arrItem : T;

type c = ArrayItemsTypes<[string | number]>




// create custom Readonly helper in ts

type CustomReadonlyTask<T> = {
    // loop through all keys and mark as readonly
    readonly [U in keyof T]: T[U]
}

interface Task {
    id: number;
    name: string;
}

let task: CustomReadonlyTask<Task> = {
    id: 5,
    name: "je baat"
}

//not allowed
//task.name = 'chet';


// create a helper called FirstArrayItem which will return the first array item as type;
// Difficulty: Hard, Time: 15 Minutes

//approach 1
//`T extends any[]` make sure that input is an array which is a generic constraints

type FirstArrayItems<T extends any[]> = T extends [] ? never : T[0];

// approach 2 with checking length
type FirstArrayItems1<T extends any[]> = T['length'] extends 0 ? never : T[0];

type array1 = ['kiran', 'kumar', 'dash'];
type array2 = [20, 30, 40];


type result1type = FirstArrayItems<array1>;
type result2type = FirstArrayItems<array2>;

type result3type = FirstArrayItems1<array1>;
type result4type = FirstArrayItems1<array2>;
type result5type = FirstArrayItems1<[]>;


// create a helper called TupleLength which will return the length of the tuple as type;
// Difficulty: Medium, Time: 5 Minutes


//`T extends any[]` make sure that input is an array which is a generic constraints
type TupleLength<T extends any[]> = T["length"];

type tuple1 = ['kiran', 'kumar', 'dash'];
type tuple2 = ['red', 'blue', 'orange', 'yellow'];

type tuple1Length = TupleLength<tuple1>;
type tuple2Length = TupleLength<tuple2>;



// create a utility called If which will return true or false based on the condition
// Difficulty: Medium, Time: 5 Minutes


type If<C extends boolean, T, U> = C extends true ? T : U;

type X = If<true, 'x', 'y'>;
type Y = If<false, 'x', 'y'>;
type Z = If<false, [1, 2], [3, 4]>;


// create a utility called Concat which does Array.concat
// Difficulty: Medium, Time: 5 Minutes

type Concat<T extends any[], U extends any[]> = [...T, ...U];


type ConcatResult = Concat<[1, 2, 3], [4, 5, 5]>