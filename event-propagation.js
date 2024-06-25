/**
 * event propagation
 * when and in which direction event will be executed.
 * event propagation has two types
 * 1. Event Bubbling
 * 2. Event Capturing
 */

/**
 * Question 1: Event Bubbling
Explanation: Event bubbling refers to the propagation of an
event from the innermost target element to the outermost ancestor. In the provided code,
clicking on the button will also trigger the click event on the form and div elements due to event bubbling.
 */




/* let dev_2 = document.getElementById("para_div");
let para = document.getElementById("heading");


let dev_1 = document.getElementById("form_div");
const form_1 = document.getElementById("form");

const button_1 = document.getElementById("btn");


dev_2.addEventListener("click", (e) => {
    console.log("dev_2");
})

para.addEventListener("click", (e) => {
    console.log("para");
})


document.body.addEventListener("click", (e) => {
    console.log("body");
})

dev_1.addEventListener("click", (e) => {
    console.log("dev_1");
});


form_1.addEventListener("click", (e) => {
    console.log("form_1");
});


button_1.addEventListener("click", (e) => {
    console.log("button_1");
});
 */

/**
 * Question 2: event.target vs this.target vs event.currentTarget
Explanation: event.target refers to the element that triggered the event,
 this refers to the element to which the event listener is attached (i.e., the current context),
 and event.currentTarget refers to the element that is currently handling
 the event during its capture or bubbling phase.
 */


/*
let dev_1 = document.getElementById("form_div");
const form_1 = document.getElementById("form");
const button_1 = document.getElementById("btn");
dev_1.addEventListener("click", handleClick);
form_1.addEventListener("click", handleClick);
button_1.addEventListener("click", handleClick);
function handleClick(event) {
    console.log("event.target", event.target.tagName);
    console.log("this", this.tagName);
    console.log("event.currentTarget", event.currentTarget.tagName);
}
*/


/**
 * Question 3: Event Capturing
Explanation: Event capturing is the opposite of event bubbling,
where the event is captured from the outermost element towards the target element.
 By setting {capture: true}, event listeners are triggered during the capturing
 phase instead of the bubbling phase.
 */


/*
document.body.addEventListener("click", handleClick, { capture: true });

let div_1 = document.getElementById("form_div", { capture: true });
const form_1 = document.getElementById("form", { capture: true });
const button_1 = document.getElementById("btn", { capture: true });

div_1.addEventListener("click", handleClick);
form_1.addEventListener("click", handleClick);
button_1.addEventListener("click", handleClick);
function handleClick(event) {
    alert(event.currentTarget.tagName)
}
*/

/**
 * Question 4: Stop Propagation
Explanation: event.stopPropagation() prevents the further propagation of
an event through the DOM tree. In the provided code, clicking on the form element will not
trigger the click event on the div element due to event.stopPropagation() being called.
 */

/* document.body.addEventListener("click", handleClick);

let div_1 = document.getElementById("form_div");
const form_1 = document.getElementById("form");
const button_1 = document.getElementById("btn");

div_1.addEventListener("click", handleClick);
form_1.addEventListener("click", handleClick);
button_1.addEventListener("click", handleClick);
function handleClick(event) {
    alert(event.currentTarget.tagName)
    if (event.currentTarget.tagName === "FORM") {
        event.stopPropagation();
    }
} */

/**
 * Question 5: Event Delegation
Explanation: Event delegation is a technique where a
parent element listens for events on behalf of its children.
In this code, the parent element with the class "products" listens for click events and checks if
the clicked target is a span element, redirecting to a specific URL based on the span's class.
 */



/* document.querySelector(".products").addEventListener("click", (event) => {
    console.log(event.target.className);

    if (event.target.tagName === "SPAN") {
        window.location.href += "/" + event.target.className;
    }
}); */




// Question 6 : What is the Output?

/* const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", function (event) {
    alert("div");
});

form.addEventListener("click", function (event) {
    alert("form");
}, { capture: true });

button.addEventListener("click", function (event) {
    alert("button");
});


Output: form, button,div
 */


/**
 * Question 7 : Create a Modal which closes by clicking on negative space
 */

const container = document.querySelector(".modalContainer")
const button = document.querySelector(".modalButton");

button.addEventListener("click", function () {
    toggleModal(true);
})


function toggleModal(toggle) {
    container.style.display = toggle ? "flex" : "none";
}

container.addEventListener("click", function (event) {

    if (event.target.className == "modalContainer") {
        toggleModal(false);
    }
})