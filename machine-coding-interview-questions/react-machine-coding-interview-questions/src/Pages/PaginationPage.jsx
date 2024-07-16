import { useEffect, useState } from "react";

import Pagination from "../components/Pagination";

const PaginationPage = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetchProducts();
    }, [page])

    const fetchProducts = async () => {
        const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`);
        //const response = await fetch(`https://dummyjson.com/products?limit=100`);

        const { products, total } = await response.json();
        if (products && products.length) {
            setProducts(products);
            setTotalPages(total);
        }
    }
    return (
        <>
            {
                products.length > 0 && <div className="products">
                    {
                        /* products.slice(page * 10 - 10, page * 10).map((product) => {
                            return (
                                <span className="products__single" key={product.id}>
                                    <img alt={product.title} src={product.thumbnail}></img>
                                    <span>{product.title}</span>
                                </span>
                            )
                        }) */
                        products.map((product) => {
                            return (
                                <span className="products__single" key={product.id}>
                                    <img alt={product.title} src={product.thumbnail}></img>
                                    <span>{product.title}</span>
                                </span>
                            )
                        })
                    }
                </div>
            }
            <>
                {
                    products.length > 0 && <Pagination
                        products={products}
                        page={page}
                        totalPages={totalPages}
                        setPage={setPage}
                    />
                }
            </>
        </>
    )
}
export default PaginationPage;