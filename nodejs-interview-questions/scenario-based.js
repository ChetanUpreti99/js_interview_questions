/**
 * You have a Node.js application that needs to read multiple large files concurrently and then process their contents.
 * How would you achieve this in an efficient way?
 */

// Solution

//const fs = require("node:fs/promises");


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
//readFile(filePaths);


/**
 * In a Node.js Express application, how would you handle errors globally to
 * ensure that all errors are logged and a user-friendly message is returned to the client?
 */

//I would use an error-handling middleware function in 
//Express to catch all errors and log them, then send a generic message to the client.

/* const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
    try {
        // Simulate an error
        throw new Error('Something went wrong!');
    } catch (err) {
        next(err); // Pass the error to the error handler
    }
});


app.use((err, req, res, next) => {

    console.log(err.stack);
    res.status(500).send('Internal Server Error');
});

app.listen(3000, () => {
    console.log(`Server is running`);
})
 */

/**
 * You notice that your Node.js application is experiencing performance issues under high load due to synchronous
 * operations. How would you identify and optimize these bottlenecks?
 */


//we can you built in tool like profiler to get which synchronous operations causing bottlenecks, then I can use asynchronous
//apis to replace them

/*
const fs = require('fs');
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);
*/

/**
 * const fs = require('node:fs/promises').;

fs.readFile('file.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));
 */


/**
 * You need to integrate a Node.js application with a MongoDB database and perform
 * basic CRUD operations. How would you structure your code to achieve this?
 */

//I would use the mongoose library to interact with MongoDB and define a schema for the data model.

/**
create express server
const mongoose  = require("mongoose");
mongoose.connect("URL",{});


const UserSchema = new mongoose.Schema({
    email:string,
    name:string,

})


const User = mongoose.modal("User",UserSchema);

const newUser = new User(req.body)
await newUser.save();

const users  = await User.find();
 */

/**
 * How would you implement communication between two microservices in a Node.js 
 * application using RabbitMQ?
 */

/**
 * amqplib package
 * connect
 * create channel
 * 
 * assertQueue
 * 
 * sendToQueue producer
 * 
 * consume
 * ack
 * 
 */

/**
 * How would you implement user authentication and authorization in a Node.js application using JWT (JSON Web Token)?
 */

/**
 * jsonwebtoken lib
 * 
 * jwt.sign => data, key, expire time
 *  jwt.verify => token , key
 */


/**
 * How would you write tests for a Node.js application?
 * I would use Mocha as the test framework and Chai for assertions.
 */

/**
 * using mocha chai or jest
 */
/**
 *  const {expect} = require('chai);
 *  const request= require('supertest);
 * 
const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.status(200).send('Hello, world!');
});

describe("GET /hello",()=>{
    it('responds with "Hello, world!"',(done)=>{
        request(app)
        .get("/hello")
        .expect(200)
        .end((err,res)=>{
            if(err) return done(err);
        .end((err,res)=>{
            expect(res.text).to.equal("Hello, world!");
            done();
        })
    })
})


npx mocha app.js


 */