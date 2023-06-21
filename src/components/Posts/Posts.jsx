import Post from '../Post/Post';
import './Posts.css'

const Posts = ({ postsDataMock }) => {
    console.log(postsDataMock);
    return (
        <div>
            <ul>
                {
                    postsDataMock.map((post) =>
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