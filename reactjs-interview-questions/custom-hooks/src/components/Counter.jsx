import React from 'react'
import useCounter from "../hooks/use-counter";


function Counter() {

    const { increment, decrement, clearCounter, counter } = useCounter(0, 2);
    return (
        <div>Counter: {counter}


            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={clearCounter}>ClearCounter</button>
        </div>

    )
}

export default Counter;