import { useEffect, useState } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });

    const handleWindowResize = () => {
        setWindowSize({
            height: window.innerHeight,
            width: window.innerWidth
        })
    }
    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        }
    }, [handleWindowResize])

    return {
        windowSize
    }
}

export default useWindowSize;