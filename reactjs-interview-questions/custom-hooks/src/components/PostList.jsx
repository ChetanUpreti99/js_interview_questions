import useFetch from "../hooks/use-fetch";

const PostList = () => {

    const { data, error, isLoading } = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=50");

    if (isLoading) {
        return <span>Loading....</span>
    }

    if (error) {
        return <span>Error: {error.message}</span>
    }

    return (
        <div>
            <h1>Post Lists</h1>
            {data && data.map((post) => (
                <div key={post.id}>
                    <div
                        style={{
                            height: 150,
                            border: "1px solid #ccc",
                            padding: "10px",
                            marginBottom: "10px",
                        }}
                    >
                        <h2 className="text-wrap">{post.title}</h2>
                        <p className="text-wrap">{post.body}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default PostList;