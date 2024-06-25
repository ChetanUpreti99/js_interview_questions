const myName = `chetan`;
const position = `Software Engineer`
console.log`Hi I am ${myName}`;

function printNameAndPosition(str, name, position) {
    console.log(str, name, position)
}


printNameAndPosition`Hi, I am ${myName} and I am a ${position}`;

//length
myName.length;

//Accessing Characters
myName[2];
myName.charAt(2);

//looping
for (let index = 0; index < myName.length; index++) {
    const element = myName[index];
    console.log(element);
}

//modifying string

// will not happen cause strings in JS are immutable.
myName[2] = 'h';

// replace gives new string(doesn't modify)
//fist instance of char in string
myName.replace("h", "v");

//all instance of char in string
myName.replaceAll("h", "v");
//Returns a string that contains the concatenation of two or more strings.
const word = myName.concat(" I am in Noida.");

let newWord = `  hye bro     `;
//Removes the leading and trailing white space and line terminator characters from a string.
let nw = newWord.trim();

console.log(nw);

//searching
//Returns the position of the first occurrence of a substring.
newWord.indexOf("h");
newWord.indexOf("hye");

//Returns the last occurrence of a substring in the string.
newWord.lastIndexOf("e");

//returns true if the sequence of elements of 
//searchString converted to a String is the same as the 
//corresponding elements of this object (converted to a String) starting at position. Otherwise returns false.
newWord.startsWith("e");
newWord.endsWith("e");