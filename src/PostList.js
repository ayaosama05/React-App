import { useState } from "react";
import { Link } from "react-router-dom"
import {useHistory} from 'react-router-dom';

const PostList = ({posts}) => {
    //const posts = props.posts;
    const [Pend , setPend] = useState(false);
    const history = useHistory();

    const DeleteThisPost = (ID) => {
        console.log(ID);
        setPend(true);

        fetch('http://localhost:8000/Posts/' + ID , {
            method : 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(() => {
            delete 
            console.log("delete successfully !!");
            setPend(false);
            //refresh Page
            window.location.reload(false);
        })

    }

    return (
        <div>
            {posts.map((post) => (
            <div className="Card" key={post.id}>
                <div className="card-header">
                    <div className="user-description flex flex-col items-start">
                      <p className="font-medium">{post.userName}</p>
                      <p className="font-light text-dark-grey">{post.title}</p>
                      <p className="font-light text-grey">{post.body}</p>
                    </div>
                </div>
                <div className="flex flex-row gap-3xs px-1">
                    <Link to={`/PostDetails/${post.id}`} className="text-white bg-warning p-3"> Details </Link>
                    <Link to={`/PostEdit/${post.id}`} className="text-white bg-dark-btnFocus p-3"> Edit </Link>
                    <a onClick = {() => DeleteThisPost(post.id)} className="bg-error text-white p-3 cursor-pointer"> Delete </a>
                </div>
            </div>
            ))}
        </div>
    );
}

export default PostList;

