/**
 * What are the different ways to handle asynchronous code in Node.js?
 * Compare callbacks, promises, and async/await.
 */


// const fs = require("node:fs/promises");

/* fs.readFile("file.txt", "utf-8", (err, data) => {
    if (err) {
        throw err;
    }
    else {
        console.log("data", data);
        if (data) {
            fs.readFile("file.txt", "utf-8", (err, data) => {
                if (err) {
                    throw err;
                }
                console.log("data in inside");
            })
        }

    }
}) */


/* fs.readFile("file1.txt", "utf-8")
    .then((data) => {
        console.log(data)

    })
    .catch(err => {
        console.log('err', err)
    }) */

//How can you handle errors in async/await?

/* async function readFile() {
    try {
        const fileData = await fs.readFile("file1.txt", "utf-8");
        console.log(fileData);
    } catch (error) {
        console.log(`error`, error);
    }

}

readFile(); */

/* async function readFile() {
    try {
      const data = await fs.readFile('file.txt', 'utf8');
      console.log('File content:', data);
    } catch (err) {
      console.error('Error reading file:', err);
    } finally {
      console.log('Finished reading file');
    }
  }

  readFile(); */


/**
async function readFile(filename) {
    const data = await fs.readFile(filename, 'utf8');
    return data;
}
async function main() {
    try {
        const data = await readFile('file1.txt')
        //   .catch(err => {});
        console.log('File content:', data);
    } catch (err) {
        console.error('Error in main function:', err);
    }
}
main();
*/


//What are Node.js streams, and how do they work?

/* const fs = require("fs")
const readStream = fs.createReadStream("file.txt", "utf-8");

readStream.on("data", (chunk) => {
    console.log('data in chunk');
})


readStream.on("end", () => {
    console.log('No more data.');
})

readStream.on("error", (err) => {
    console.log('error', err);
})


const writeStream = fs.createWriteStream("output.txt", "utf-8");

writeStream.write("hyeeeeeee \n");
writeStream.write("hyeeeeeee \n");
writeStream.write("hyeeeeeee \n");
writeStream.write("hyeeeeeee \n");
writeStream.write("hyeeeeeee \n");
writeStream.write("hyeeeeeee \n");


writeStream.end(); // Call end() to close the stream

writeStream.on("finish", () => {
    console.log('All writes are now complete.');
})

writeStream.on('error', err => {
    console.error('Error:', err);
});


const writableStream = fs.createWriteStream('output_1.txt');



readStream.pipe(writableStream);
 */

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

console.log(`numCPUs`, numCPUs);
if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        // Optionally replace the worker if it dies
        cluster.fork();
    });

} else {
    // Workers can share any TCP connection
    // In this case, it is an HTTP server
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`Hello World\n on Worker ${process.pid} `);
    }).listen(8000);

    console.log(`Worker ${process.pid} started`);
}


/*
const cluster = require("cluster");
const http = require("http");
const numCPUS = require("os").cpus().length;

console.log(`numCPUS`, numCPUS);

if (cluster.isMaster) {
    console.log(`Master process running ${process.pid}`);

    for (let index = 0; index < numCPUS; index++) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        cluster.fork();
    })
} else {
    http.createServer((req, res) => {
        res.end(`hye on worker ${process.pid}`)
    }).listen(4000)
    console.log(`process running on  ${process.pid}`)
} */

//What is a Buffer in Node.js, and when would you use it?

/* const buf = Buffer.from('Hello, world!', 'utf8');
// console.log(buf);

const buf1 = Buffer.alloc(10);
// Creates a buffer of length 10, filled with zeros
buf1[4] = "r";
buf1[1] = "1";
//console.log(buf1);

const buf3 = Buffer.alloc(10);
buf3.write('Hello');
//console.log(buf.toString()); // 'Hello'


const zlib = require('zlib');
const input = Buffer.from('Hello, world!', 'utf8');
zlib.deflate(input, (err, buffer) => {
    if (!err) {
        console.log(buffer); // Compressed data
    }
}); */


//Explain the concept of event emitters in Node.js.

/* const fs = require("fs");
const EventEmitter = require("events");
const myEventEmitter = new EventEmitter();


myEventEmitter.on("fileFetched", (data) => {
    console.log(data);
})
fs.readFile("file.txt", 'utf8', (err, data) => {
    if (err) {
        throw err;
    }
    else {
        myEventEmitter.emit("fileFetched", data);
    }
}) */


//How would you write custom middleware for logging requests in an Express app?

/* const express = require("express");
const app = express();

const logger = (req, res, next) => {
    console.log(req.url);
    next();
}

app.use(logger);

app.get("/home", (req, res) => {
    res.send("home api");
})

app.listen(4000, () => {
    console.log('server running');
}); */