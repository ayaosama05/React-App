import { Link, useParams } from "react-router-dom";
import useFetch from './useFetch';
import {useHistory} from 'react-router-dom';

const PostDetails = () => {

    const { id } = useParams();
    const {data:post , Pending , error} = useFetch('http://localhost:8000/Posts/' + id);
    const history = useHistory();

    const DeletePost = () => {
        fetch('http://localhost:8000/Posts/' + post.id , {
            method : 'DELETE'
        })
        .then(() => {
            console.log("Deleted !!");
            history.push('/');
        })
    }

    return ( 
        <div>
            <p>Here's details {id} :</p>
            {Pending && <p> Loading details ....</p>}
            {error && <p> {error} </p>}
            {post && <div className="Card" key={post.id}>
                <div className="card-header">
                    <div className="user-description flex flex-col items-start">
                      <p className="font-medium">{post.userName}</p>
                      <p className="font-light text-dark-grey">{post.title}</p>
                      <p className="font-light text-grey">{post.body}</p>
                    </div>
                </div>
                <div className="flex flex-row gap-xs">
                    <button className="bg-error p-3 rounded-md text-white" onClick={DeletePost}>Delete</button>
                    <Link to='/' className="bg-success p-3 rounded-md text-white"> Back to home</Link>
                </div>
            </div>}
        </div>
     );
}
 
export default PostDetails;