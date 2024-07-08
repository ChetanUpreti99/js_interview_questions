/**
 * You have a Node.js application that needs to read multiple large files concurrently and then process their contents.
 * How would you achieve this in an efficient way?
 */

// Solution

const fs = require("node:fs/promises");


async function readFile(filePaths) {
    try {
        const fileReadPromises = filePaths.map(path => fs.readFile(path, 'utf-8'));
        const fileContents = await Promise.all(fileReadPromises);
        for (let index = 0; index < fileContents.length; index++) {
            const fileContent = fileContents[index];
            console.log(`fileContent`, fileContent);
        }
    } catch (error) {
        console.log(`There is some error wile reading files`, error.message);
    }


}

const filePaths = ["file.txt", "output.txt"];
readFile(filePaths);