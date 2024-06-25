//Debouncing and Throttling


/**
 *  debounce: Grouping a sudden burst of events (like keystrokes) into a single one.
    debouncing is a technique in which, no matter how many times the user fires the event,
    the attached function will be executed only after the specified time once the user stops firing the event.


    throttle: Guaranteeing a constant flow of executions every X milliseconds. 
    Like checking every 200ms your scroll position to trigger a CSS animation.

    throttling is a technique in which, no matter how many times the user fires the event, 
    the attached function will be executed only once in a given time interval.
 */

//Ques 1 - Create a button UI and add debounce as follows =>
//        --> Show "Button pressed <X> Times" every time button is pressed.
//        --> Increase "Triggered  <Y> Times" count after 800ms of debounce.


const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_passed");
const count = document.querySelector(".increment_count");

let pressedCount = 0;
let triggeredCount = 0;

/* const debounceCount = _.debounce(() => {
    count.innerHTML = ++triggeredCount;
}, 800) */

///Ques 2 - Button Press Throttle
/* const throttleCount = _.throttle(() => {
    triggeredCount+=1
    count.innerHTML = triggeredCount;
}, 3000) */


btn.addEventListener('click', () => {
    btnPress.innerHTML = ++pressedCount;
    //debounceCount();
    throttleCount()
})

//Ques 3 - Implement Debounce Polyfill




/* This function creates a debounced function that delays 
invoking the callback until after 'time' milliseconds have elapsed since the last time 
the debounced function was invoked.
*/
const myDebounceCount = (cb, time) => {
    // Declare a variable to hold the timer ID
    let timer;

    // Return a function that accepts a variable number of arguments
    return function (...args) {
        // If the timer is currently active, clear it
        if (timer) {
            clearTimeout(timer);
        }

        // Set a new timer that will invoke the callback after 'time' milliseconds
        // The callback is invoked with the arguments passed to the debounced function
        timer = setTimeout(() => {
            cb(...args)
        }, time)
    }
}
/* This function creates a throttled function that only 
invokes the callback at most once every 'd' milliseconds.
*/
const myThrottleCount = (cb, d) => {
    // Initialize a variable to hold the timestamp of the last time the callback was invoked
    let last = 0;

    // Return a function that accepts a variable number of arguments
    return function (...args) {
        // Get the current timestamp
        let now = new Date().getTime();

        // If less than 'd' milliseconds have passed since the last invocation, exit the function
        if (now - last < d) return;

        // Update the timestamp of the last invocation
        last = now;

        // Invoke the callback with the arguments passed to the throttled function
        cb(...args);
    }
}

const throttleCount = myThrottleCount(() => {
    count.innerHTML = ++triggeredCount;
}, 800)

const debounceCount = myDebounceCount(() => {
    count.innerHTML = ++triggeredCount;
}, 800)
