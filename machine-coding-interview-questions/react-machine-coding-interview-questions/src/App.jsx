import './App.css'


import { useEffect, useState } from "react";
function App() {
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

	const selectPage = (selectedPage) => {
		if (selectedPage > 0 && selectedPage <= totalPages / 10 && page !== selectedPage) {
			setPage(selectedPage);
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
					products.length > 0 && <div className="pagination">
						<span
							className={page > 1 ? "" : "pagination__disable"}
							onClick={() => selectPage(page - 1)}
						>
							⬅️
						</span>

						{
							/* [...Array(products.length / 10)].map((_, index) => {
								return (
									<span
										key={index}
										className={page === index + 1 ? "pagination__selected" : ""}
										onClick={() => selectPage(index + 1)}>
										{index + 1}
									</span>
								)
							}) */
							[...Array(Math.floor(totalPages / 10))].map((_, index) => {
								return (
									<span
										key={index}
										className={page === index + 1 ? "pagination__selected" : ""}
										onClick={() => selectPage(index + 1)}>
										{index + 1}
									</span>
								)
							})



						}
						<span
							className={page < totalPages / 10 ? "" : "pagination__disable"}
							onClick={() => selectPage(page + 1)}>
							➡️
						</span>
					</div>

				}


			</>

		</>
	)
}



export default App
