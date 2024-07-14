import { useRef, forwardRef, useImperativeHandle } from "react";

const UseImperativeHandleHook = () => {
    let childRef = useRef();
    return <div>
        <button onClick={() => childRef.current.focusInput()}>Click me</button>
        <ChildComponent ref={childRef} />
    </div>
}


const ChildComponent = forwardRef((props, ref) => {
    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    }

    useImperativeHandle(ref, () => {
        return { focusInput }
    }
    )
    return (
        <div>
            <input ref={inputRef}></input>
        </div>
    )
})


export default UseImperativeHandleHook;