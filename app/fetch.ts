/*const signal = new AbortSignal()*/ //Cancel cache in memory
export async function fetchPostDetail(postId: string) {
    const data = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
            cache: "no-cache",
            /*signal,*/
        }
    )
    if(!data.ok) {
        throw new Error("something wrong with post detail ha ha ha")
    }
    return data.json();
}

export async function generateStaticParams() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((posts) => {
            return posts.map((post: any) => {
                return {
                    params: {
                        postId: `${post.id}`,
                    },
                }
            })
        })
}
export async function fetchComments(postId: string) {
    const data = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
        {
            next: {
                revalidate: 3600, //1 hour cache and then send request to BE
                tags: ['comments']
            }
        }
    )
    if(!data.ok) {
        throw new Error("something wrong with post detail ha ha ha")
    }
    return data.json();
}
