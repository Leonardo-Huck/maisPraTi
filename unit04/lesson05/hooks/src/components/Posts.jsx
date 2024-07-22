import { useEffect, useState } from "react";

function Posts() {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        const fetchPostsData = setInterval(async () => {
            const id = Math.floor(Math.random() * 101);
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            const postsData = await response.json()

            setPosts(postsData)
        }, 30000)

        return () => {
            setPosts(null)
            clearInterval(fetchPostsData)
        }
    }, [])

    return (
        <div>
            {posts ? (
                <div>
                    <h1>{posts.title}</h1>
                    <h1>{posts.body}</h1>
                </div>
            ) : (
                <p>Carregando Posts</p>
            )}
        </div>
    )
}

export default Posts