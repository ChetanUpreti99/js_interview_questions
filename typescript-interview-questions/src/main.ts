/**
Difference between TS and JS
1. both are programming languages. JS can run on browsers but TS can't. TS is strongly type language.
2. TS additional type checks which is missing in JS.
3. give type error in compile time.
*/

// 1. Can you write some code to demonstrate the difference between explicit and implicit types and which one to use?
// 2. What is the type of savings in `const savings = 15`?  //15

//explicit
let num: number = 17;
let name: string = "chetan";
console.log(num, name);


//implicit
let num1 = 17;
let name1 = "chetan";
console.log(num1, name1);

const savings = 15;
console.log(savings);


/**
 Write a function `getAddress` which adds city, state and country and returns a comma separated full address
Level: Easy, Duration: 5 minutes
*/


function getAddress({ city, state, country }: { city: string; state?: string; country: string }): string {
  return [country, state, city].filter(Boolean).join(",");
}


console.log(getAddress({ city: 'Sixth Avenue', country: 'Singapore' }));

/**
Explain interface in TypeScript by writing some code
Level: Easy, Duration: 5 minutes
*/

/**
to define entity in TS 
Interface allows us to add typescript support for object ex: we have added type for a Profile entity
*/


interface Profile {
  name: string;
  age: number;
}

let user: Profile = {
  name: "chetan",
  age: 26
}


function getUserAge(user: Profile): number {
  return user.age;
}
console.log(user);
console.log(getUserAge(user));


// Explain type in TypeScript by writing some code
// Level: Easy, Duration: 5 minutes

// type is a reserved word that allows us to add typescript support
type ProfileType = {
  name: string;
  age: number;
}

let user1: ProfileType = {
  name: "chetan",
  age: 26
}


function getUserAge1(user: ProfileType): number {
  return user.age;
}
console.log(user1);
console.log(getUserAge1(user1));



// Explain difference between interface and type in TypeScript by writing some code
// Level: Easy, Duration: 5 minutes

