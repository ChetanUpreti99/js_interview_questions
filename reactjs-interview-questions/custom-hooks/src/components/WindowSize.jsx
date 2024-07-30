import React from 'react'
import useWindowSize from "../hooks/use-window.size";

function WindowSize() {

    const { windowSize: { height, width } } = useWindowSize();
    return (
        <div>
            Height: {height}
            Width: {width}
        </div>
    )
}

export default WindowSize;