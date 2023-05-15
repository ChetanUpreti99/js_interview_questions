//promise chaining

let firsPromise = new Promise((resolve, reject) => {
    resolve('First Promise');
})


let secondPromise = new Promise((resolve, reject) => {
    resolve(firsPromise);
})

secondPromise.then(res => {
    return res;
})
    .then(res => {
        console.log(res);
    })


function importantAction(userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`My userName is ${userName}`)
        }, 500);
    })
}

function likeAction(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Please like my ${video}`)
            //reject('error');
        }, 1000);
    })
}


function shareAction(video, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Please share my ${video}`)
        }, 1000);
    })
}


function callFunRecur(params) {
    if (params.length === 0) return;
    let curPromise = params.shift();
    curPromise.then(res => {
        console.log(res);
    })
        .catch(err => {
            console.log(err);
        })
    return callFunRecur(params);
}

callFunRecur([
    importantAction('chetan'),
    likeAction('JS video'),
    shareAction('Node.js video')
])
