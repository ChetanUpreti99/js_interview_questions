console.log('start');

const promise1 = new Promise((resolve, reject) => {
    console.log('1');
    resolve('2');
    console.log('3');
})

const promise2 = new Promise((resolve, reject) => {
    console.log('1');
    console.log('3');
})

promise1.then(res => {
    console.log(res);
})

promise2.then(res => {
    console.log('here', res); //cause there is no resolve so no go .then block
})

console.log('end');



const fn = () => {
    return new Promise((resolve, reject) => {
        console.log('1');
        resolve('success')
    })
}

console.log('here');

fn().then((res) => {
    console.log(res);
})



//promise chaining
const job = () => {
    return new Promise((resolve, reject) => {
        reject();
    })
}

const promise3 = job();
promise3.then(() => {
    console.log('success 1')
})
    .then(() => {
        console.log('success 2')
    })
    .then(() => {
        console.log('success 3')
    })
    .catch((error) => {
        console.log('Error 1')
    })
    .then(() => {
        console.log('success 4')
    })



// throw "Defeat"; this is error throwing so if there is ant .catch block its will go on .catch block
// new Error('some text') this is go .then block because it is some text we passing.
//promise chaining


const job1 = (state) => {
    return new Promise((resolve, reject) => {
        if (state) {
            resolve('resolve.')
        } else {
            reject('reject');
        }
    })
}

const promise4 = job1(true);
promise4.then((data) => {
    console.log(data);
    return job1(true);
})
    .then((data) => {
        if (data !== 'some') {
            throw 'Defeat';
        }
        return job1(true);
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error);
        return job1(false);
    })
    .then((data) => {
        console.log(data);
        return job1(true);
    })
    .catch(error => {
        console.log(error);
        return 'Error Caught';
    })
    .then((data) => {
        console.log(data);
        return new Error('some text');
    })
    .then((data) => {
        console.log(data);
        throw new Error('some text error');
    })
    .then((data) => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
        return 'Error Caught';
    })