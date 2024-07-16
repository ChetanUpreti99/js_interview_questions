const Pagination = ({ products, page }) => {
    return (
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
                        [...Array(products.length / 10)].map((_, index) => {
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
                        className={page < products.length / 10 ? "" : "pagination__disable"}
                        onClick={() => selectPage(page + 1)}>
                        ➡️
                    </span>
                </div>

            }


        </>
    )
}