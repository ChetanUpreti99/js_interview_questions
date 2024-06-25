//Debouncing and Throttling


/**
 *  debounce: Grouping a sudden burst of events (like keystrokes) into a single one.
    throttle: Guaranteeing a constant flow of executions every X milliseconds. 
    Like checking every 200ms your scroll position to trigger a CSS animation.
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




const myDebounceCount = (cb, time) => {

    let timer;

    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            cb(...args)
        }, time)
    }
}




const myThrottleCount = (cb, d) => {

    let last = 0;

    return function (...args) {
        let now = new Date().getTime();
        if (now - last < d) return;
        last = now;
        cb(...args);
    }
}



const throttleCount = myThrottleCount(() => {
    count.innerHTML = ++triggeredCount;
}, 800)



const debounceCount = myDebounceCount(() => {
    count.innerHTML = ++triggeredCount;
}, 800)
