import { useState } from "react";
const useCounter = (initialCount = 0, step = 2) => {
    const [counter, setCounter] = useState(initialCount);
    const increment = () => {
        setCounter(step + counter);
    }

    const decrement = () => {
        setCounter(counter - step);
    }

    const clearCounter = () => {
        setCounter(0);
    }
    return {
        counter,
        increment,
        decrement,
        clearCounter
    }
}

export default useCounter;