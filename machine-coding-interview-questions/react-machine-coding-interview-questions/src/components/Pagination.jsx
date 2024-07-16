/**
Implement a Button Based Pagination with Truncation functionality in React JS
Requirements remain similar to previous lesson, 
just we are going to truncate our buttons into "..." (ellipsis) when it exceeds a provided limit.
*/
const Pagination = ({ products, page, setPage, totalPages }) => {

    const selectPage = (selectedPage) => {
        if (selectedPage > 0 && selectedPage <= totalPages / 10 && page !== selectedPage) {
            setPage(selectedPage);
        }
    }
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
    )
}

export default Pagination;