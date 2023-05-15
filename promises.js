//callbacks


console.log('start');

/* function importantAction(userName, cb) {
	setTimeout(() => {
		cb(`My userName is ${userName}`);
	}, 100);
}

importantAction('Chetan', function (message) {
	console.log(message);
	likeAction('JS', function (message) {
		console.log(message);
		shareAction('JS', function (message) {
			console.log(message);
		})
	})
})

function likeAction(video, cb) {
	setTimeout(() => {
		cb(`Please like my ${video}`);
	}, 100)
}


function shareAction(video, cb) {
	setTimeout(() => {
		cb(`Please share my ${video}`);
	}, 100)
} */


console.log('end');


//promises

/**
According to MDN The Promise object represents the 
eventual completion (or failure) of an asynchronous operation and its resulting value.

Basically it allows you to add handlers with an asynchronous action's 
eventual success value or failure. So you get the result with little bit of 
delay which is a promise which will give the result at some point.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

 */


const sub = new Promise((resolve, reject) => {
	setTimeout(() => {
		const result = true;
		if (result) {
			resolve(`Hi I am chetan.`);
		} else {
			reject(
				new Error(`Who are you buddy.`)
			);
		}
	}, 1000);
})

sub
	.then(response => {
		console.log(`response`, response);
	})
	.catch(error => {
		console.log(error.message)
	})

new Promise((resolve, reject) => {
	return Promise.resolve('hye', reject)
})

const sub_1 = Promise.reject(`hye`);
sub_1.then(res => {
	console.log(res)
})
	.catch(error => {
		console.log('error', error)
	})



function importantAction(userName) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`My userName is ${userName}`)
			//reject(`My userName is ${userName}`)
		}, 500);
	})
}

importantAction('chetan').then(response => {
	console.log(response);
	likeAction('JS video').then(response => {
		console.log(response);
		shareAction('JS video').then(response => {
			console.log(response);
		})
			.catch(error => {
				console.log(`Line 106 ${error}`)
			})
	})
		.catch(error => {
			console.log(`Line 110 ${error}`)
		})
})
	.catch(error => {
		console.log(`Line 114 ${error}`)
	})



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



//promise chaining
importantAction('chetan').then(response => {
	console.log(response);
	return likeAction('JS video');
})
	.then(response => {
		console.log(response);
		return shareAction('JS video');
	})
	.then(response => {
		console.log(response);
	})
	.catch(error => {
		console.log(error);
	})

//Promise Combinator

//Promise.all()
/**
 * The Promise.all() static method takes an iterable of promises as input and returns a single Promise. 
 * This returned promise fulfills when all of the input's promises fulfill 
 * (including when an empty iterable is passed), with an array of the fulfillment values. 
 * It rejects when any of the input's promises rejects, with this first rejection reason.
 */

Promise.all([importantAction('Upreti'), likeAction('Type'), shareAction('Type')])
	.then(res => {
		console.log(res);
	})
	.catch(err => {
		console.log('line 170', err);
	})

/**
 * The Promise.race() static method takes an iterable of promises as input and returns a single Promise. 
 * This returned promise settles with the eventual state of the first promise that settles.
 */
Promise.race([importantAction('Upreti'), likeAction('Type'), shareAction('Type')])
	.then(res => {
		console.log(`Promise.race then`, res);
	})
	.catch(err => {
		console.log('Promise.race catch', err);
	})

/**
 * The Promise.allSettled() static method takes an iterable of promises as input and returns a single Promise. 
 * This returned promise fulfills when all of the input's promises settle 
 * (including when an empty iterable is passed), 
 * with an array of objects that describe the outcome of each promise.
 */


Promise.allSettled([importantAction('Upreti'), likeAction('Type'), shareAction('Type')])
	.then(res => {
		console.log(`Promise.allSettled then`, res);
	})
	.catch(err => {
		console.log('Promise.allSettled catch', err);
	})

/**
* The Promise.any() static method takes an iterable of promises as input and returns a single Promise. 
This returned promise fulfills when any of the input's promises fulfills,
 with this first fulfillment value. It rejects when all of the input's promises reject (
	including when an empty iterable is passed),
  with an AggregateError containing an array of rejection reasons.
*/


Promise.any([importantAction('Upreti'), likeAction('Type'), shareAction('Type')])
	.then(res => {
		console.log(`Promise.any then`, res);
	})
	.catch(err => {
		console.log('Promise.any catch', err);
	})

/**
 * Promise.race and Promise.any do different things:

Promise.race is settled as soon as any of the promises you
feed it settle, whether they are fulfilled or rejected.

Promise.any is settled as soon as any of the promises you
feed it is fulfilled or they are all rejected, in which case it's rejected with an AggregateError.
 */



//Async/Await


const result = async () => {
	try {
		let result_1 = await importantAction('Sid');
		console.log(`result_1`)
		let result_2 = await likeAction('Node.js');
		console.log(`result_2`)
		let result_3 = await shareAction('Node.js');
		console.log(`result_3`)
		console.log(`result_1`, result_1, `result_2`, result_2, `result_3`, result_3)
	} catch (error) {
		console.log(error)
	}
}
result();