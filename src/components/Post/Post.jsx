import './Post.css'

const Post = ({ post }) => {
    return (

        <article className="Post">
            <div className="PostTop">
                <div className="PostTop__User">
                    <div className="User__Image">
                        <img
                            src={post?.userImage ? post?.userImage : ""}
                            alt={post?.userName}
                        />
                    </div>
                    <div className="User__Content">
                        <p className="User__Username">{post?.userName}</p>
                        <p className="User__Location">{post?.location}</p>
                    </div>
                </div>
                <div className="PostTop__Actions">
                    
                </div>
            </div>
            <div className="PostContent">
                {post?.media?.map((media) => (
                    <img key={media?.id} src={media?.src} />
                ))}
            </div>
        </article>
    )
}

export default Post;