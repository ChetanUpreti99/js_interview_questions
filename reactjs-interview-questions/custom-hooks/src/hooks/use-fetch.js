import { useState, useEffect } from "react";
const useFetch = (url, options = { method: "GET" }) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (url) {
            fetchData();
        }
    }, [url]);


    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(url, { ...options });
            if (!response.ok) {
                throw new Error(`Network response is not ok.`)
            }
            const result = await response.json();
            setData(result);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    return {
        data,
        isLoading,
        error
    }

}


export default useFetch;