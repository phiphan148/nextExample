import {fetchPostDetail} from "@/app/fetch";
import {Suspense} from "react";
import CommentDetails from "@/app/blog/[postId]/comment";
import ReloadComment from "@/app/blog/[postId]/reloadComment";

interface PostDetailsProps {
    params: {
        postId: string;
    }
}

export const revalidate = 10; //Seconds

export default async function PostDetails({params: {postId}}: PostDetailsProps) {
    const post = await fetchPostDetail(postId)
    return (
        <div>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <ReloadComment></ReloadComment>
            <Suspense fallback={<div>whatever fallback</div>}>
                <CommentDetails postId={postId}></CommentDetails>
            </Suspense>
        </div>
    )
}
