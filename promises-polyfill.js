//create our own promise called PromisePolyFill

function PromisePolyFill(executor) {

    let onResolve,
        onReject,
        isFulfilled = false,
        isRejected = false,
        isCalled = false,
        value;

    function resolve(val) {
        isFulfilled = true;
        value = val;
        if (typeof onResolve === 'function') {
            onResolve(val);
            isCalled = true;
        }
    }

    function reject(val) {
        isRejected = true;
        value = val;
        if (typeof onReject === 'function') {
            onReject(val);
            isCalled = true;
        }
    }

    this.then = function (callback) {
        onResolve = callback;
        if (isFulfilled && !isCalled) {
            isCalled = true;
            onResolve(value);
        }
        return this;

    }

    this.catch = function (callback) {
        onReject = callback;
        if (isRejected && !isCalled) {
            isCalled = true;
            onReject(value);
        }
        return this;
    }

    try {
        executor(resolve, reject);

    } catch (error) {
        reject(error)
    }
}

const examplePromise = new PromisePolyFill((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
        //reject(2);
    }, 1000);
})


examplePromise.then((res) => {
    console.log(`then`, res);
})
    .catch((error) => {
        console.error(`catch`, error);
    })


PromisePolyFill.resolve = (val) => {
    return new PromisePolyFill((resolve, reject) => {
        resolve(val);
    })
}

PromisePolyFill.reject = (val) => {
    return new PromisePolyFill((resolve, reject) => {
        reject(val);
    })
}



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





Promise.allPolyFill = (promises) => {
    return new Promise((resolve, reject) => {
        const result = [];
        if (!promises.length) {
            resolve(result);
            return;
        }

        let pending = promises.length;
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(res => {
                    result[index] = res;
                    pending--;
                    if (pending === 0) {
                        resolve(result)
                    }
                }, reject)
        });

    })
}


Promise.allPolyFill([
    importantAction('Chetan'),
    likeAction('JS'),
    shareAction('Node.js')
])
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log('here', err);
    })

PromisePolyFill.all = (promises) => {
    let fulfilledPromises = [],
        result = [];

    function executor(resolve, reject) {
        promises.forEach((promise, index) =>
            promise
                .then((val) => {
                    fulfilledPromises.push(true);
                    result[index] = val;

                    if (fulfilledPromises.length === promises.length) {
                        return resolve(result);
                    }
                })
                .catch((error) => {
                    return reject(error);
                })
        );
    }
    return new PromisePolyFill(executor);
};


export function promiseRace(promisesArray) {
    return new Promise((resolve, reject) => {
        promisesArray.forEach((promise) => {
            promise
                .then(resolve) // resolve outer promise, as and when any of the input promise resolves
                .catch(reject); // reject outer promise, as and when any of the input promise rejects
        });
    });
}

function allSettled(promises) {
    let mappedPromises = promises.map((p) => {
        return p.then((value) => {
            return {
                status: 'fulfilled',
                value,
            };
        })
            .catch((reason) => {
                return {
                    status: 'rejected',
                    reason,
                };
            });
    });
    return mappedPromises;
};


function any(promises) {
    let results = [];
    var counter = 0;

    return new Promise((resolve, reject) => {
        promises.forEach((p, index) => {
            p.then((result) => {
                resolve(result)
            }).catch((err) => {
                results.push(err);
                ++counter;
                if (counter === promises.length) {
                    reject(results);
                }
            });
        });
    });
};



