import { useState, useEffect } from "react";

import InfiniteScrolling from "../components/InfiniteScrolling";

const InfiniteScrollingPage = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);




    const myThrottle = (cb, d) => {
        let last = 0;
        return (...args) => {
            let now = new Date().getTime();

            if (now - last < d) {
                return;
            }

            last = now;
            cb(...args)
        }
    }

    const handleScroll = myThrottle(() => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 500 > document.documentElement.offsetHeight
            && !isLoading && (page * 10 < total)
        ) {
            fetchProducts();
        }
    }, 500)


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [handleScroll]);



    const fetchProducts = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=${page * 10}`);
            const { products, total } = await response.json();
            if (products && products.length) {
                setProducts(products);
                setPage(page + 1);
                setTotal(total);
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(`There is an error while getting products form API ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>

            {

                products.length > 0 && <div className="products">
                    {
                        products.map((product) => {
                            return (
                                <InfiniteScrolling key={product.id} product={product} />
                            )
                        })
                    }
                </div>
            }

            {
                isLoading ? <p>Loading......</p> : null
            }

        </>
    )

}


export default InfiniteScrollingPage;