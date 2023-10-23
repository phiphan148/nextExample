import {fetchComments} from "@/app/fetch";

interface CommentDetailProps {
    postId: string;
}


export default async function CommentDetails({postId}: CommentDetailProps ) {
    const comments = await fetchComments(postId)
    return (
        <div>
            <h3>Comments:</h3>
            {comments.map((comment: any) => (
                // eslint-disable-next-line react/jsx-key
                <div key={postId}>
                    <h4>{comment.email}</h4>
                    <p>{comment.body}</p>
                </div>
            ))}
        </div>
    )
}
