/**

Implement Infinite scrolling in a React JS.
Requirements:
  - Implement infinite scrolling for fetching more products when the user reaches the bottom of the page.
    https://dummyjson.com/products
  - Ensure that loading indicators are displayed appropriately while fetching data.
  - Implement Optimizations to prevent excessive API requests during scrolling. 
 */

const InfiniteScrolling = ({ product }) => {
    return (
        <span className="products__single" key={product.id}>
            <img alt={product.title} src={product.thumbnail}></img>
            <span>{product.title}</span>
        </span>
    )
}


export default InfiniteScrolling;


