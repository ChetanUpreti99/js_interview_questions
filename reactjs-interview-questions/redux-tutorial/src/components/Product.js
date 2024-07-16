const Product = ({ id, title, price, thumbnail }) => {
    return (
        <div key={id}>
            <li>
                <img alt="img" src={thumbnail}></img>
                {title}
                {"        "}
                {price}
                <button>Add to Cart</button>
            </li>
        </div>

    )
}


export default Product;