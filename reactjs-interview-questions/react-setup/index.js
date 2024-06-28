function Counter() {

    const [counter, setCounter] = React.useState(0);

    const increment = () => {
        setCounter(counter + 1)
    }

    return (
        /*  React.createElement("div", null,
             React.createElement("p", null, `${counter}`),
             React.createElement('button', { onClick: increment }, `Increment`)
         ) */

        <div>
            <p>Count: {counter}</p>
            <button
                onClick={increment}
            >
                Increment</button>
        </div>
    )
}



function NewCounter() {
    const [count, setCount] = React.useState(0);
    const [intervalRef, setIntervalRef] = React.useState(null);

    const startHandler = () => {
        // const newCount = count + 1;
        const ref = setInterval(() => {
            // setCount(newCount);
            //setCount(count + 1)
            /**
             * When startHandler is called, count is captured by the closure created 
             * by the setInterval function. This means that the count variable 
             * inside the setInterval callback refers to the value of count at 
             * the time startHandler was invoked and does not change on subsequent state 
             * updates.
             * 
             * React's state updates are asynchronous. 
             * When you call setCount, React schedules an update and 
             * then re-renders the component with the new state value.
             * This does not happen immediately; it happens after the current execution context is finished.
             */

            setCount((prevCount) => prevCount + 1);
            /**
             * instead of directly using the potentially stale count value, 
             * you provide a function to setCount. React calls this function 
             * with the latest state value (prevCount) every time the state needs to be updated.
             * This ensures that you always work with the most recent state.
             */

            //console.log(`newCount: ${newCount}`);
        }, 1000);
        setIntervalRef(ref);
    };

    const stopHandler = function () {
        clearInterval(intervalRef);
        setCount(0);
    };

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={startHandler}>Start</button>
            <button onClick={stopHandler}>Stop</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(NewCounter));