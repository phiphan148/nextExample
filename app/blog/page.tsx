import Link from "next/link";
import {revalidatePath} from "next/cache";

async function fetchPost() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    return data.json();
}

export default async function Blog() {
    const posts = await fetchPost();
    return (
        <div>
            <h1>Blog</h1>
            {/*<button onClick={revalidatePath('/blog')}>Click</button>*/}
            {posts.map((post: any) => (
                <div key={post.id}>
                    <Link href={`/blog/${post.id}`}>
                        {post.title}
                    </Link>
                </div>
            ))}
        </div>
    )
}
