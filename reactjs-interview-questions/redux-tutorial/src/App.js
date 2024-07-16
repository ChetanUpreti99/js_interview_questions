import { useState, useEffect } from "react";
import './App.css';

import Product from "./components/Product";
import Cart from "./components/Cart";


function App() {

	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts();
	}, [])

	const getProducts = async () => {
		try {
			const response = await fetch("https://dummyjson.com/products");
			const { products } = await response.json();
			setProducts(products);
		} catch (error) {

		}
	}

	return (
		<div className="App">
			<header className="App-header">
				<Cart />
				<ul>
					{
						products.map((product) => {
							return (
								<Product key={product.id} {...product} />

							)
						})
					}
				</ul>
			</header>
		</div>
	);
}

export default App;
