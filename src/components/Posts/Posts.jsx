import Post from '../Post/Post';
import './Posts.css'

const Posts = ({ posts }) => {
    return (
        <div>
            <ul>
                {   
                    posts?.map((post) =>
                        <li  key={post.id}>
                            <Post post={post} />
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Posts;