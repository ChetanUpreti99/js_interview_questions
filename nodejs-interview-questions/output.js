const fs = require('fs');

setTimeout(() => {
    console.log('Timeout');
}, 11);

setImmediate(() => {
    console.log('Immediate');
});

function hye() {
    fs.readFile('file.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        console.log('File Read');
    })
}
hye();



process.nextTick(() => {
    console.log('Next Tick');
});

Promise.resolve().then(() => {
    console.log('Promise');
});

console.log('Start');
