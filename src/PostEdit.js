import { useState ,useEffect} from 'react';
import useFetch from './useFetch';
import {useHistory,Link, useParams} from 'react-router-dom';

const PostEdit = () => {
    const {id} = useParams();
    const {data:post , Pending , error} = useFetch('http://localhost:8000/Posts/' + id);
    const [isPending , setIsPending] = useState(false);

    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [userName,setUserName] = useState('');

    useEffect(() => {
        if(!Pending){
            setTitle(post.title);
            setBody(post.body);
            setUserName(post.userName);
        }
      }, [Pending]);

    const history = useHistory();

    const EditPost = (e) => {
        e.preventDefault();
        const editPost = {userName , title , body};
        console.log(editPost);
        setIsPending(true);

        fetch('http://localhost:8000/Posts/' + post.id , {
            method : 'PUT',
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify(editPost)
        })
        .then(() => {
            console.log("edited successfully !!");
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
        <div className="w-full">
            <h1>Edit Post</h1>

            {post && 
                    <form className="flex flex-col gap-m p-8 items-start" onSubmit = {EditPost}>

                        <label className="lbl">Enter title</label>
                        <input type="text" required className="myInp border border-dark-grey"
                         value = {title} onChange = {(e) => setTitle(e.target.value)}/>
                        <label className="lbl">Enter description</label>
                        <textarea required  className="myInp border border-dark-grey"
                        value = {body} onChange={(e) => setBody(e.target.value)}></textarea>
                        <label className="lbl">Select name</label>
                        <select  className="myInp border border-dark-grey"
                        value = {userName} onChange= {(e) => setUserName(e.target.value)}>
                            <option value="Mario neenee"> mario neenee</option>
                            <option value="Chexy coco"> chexy coco</option>
                            <option value="John XXXX"> John XXXX</option>
                            <option value="Zeena farag"> zeena farag</option>
                        </select>
                        { !Pending && <input type="submit" className="bg-success subBtn text-dark p-3 rounded-sm"/>}
                        { Pending && <input type="Loading ..." disabled className="bg-success subBtn text-dark p-3 rounded-sm"/>}
                        
                    </form>
            }
            {error && <p> {error} </p>}
        </div>
        
     );
}
 
export default PostEdit;