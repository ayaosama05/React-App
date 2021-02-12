import { useState } from "react";
import {useHistory} from 'react-router-dom';

const Create = () => {
    const [title , setTitle] = useState('');
    const [body , setBody] = useState('');
    const [userName , setUserName] = useState('Mario neenee');
    const [Pending , setPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const Post = {userName , title , body};
        setPending(true);

        console.log(Post);
        fetch('http://localhost:8000/Posts' , {
            method : 'POST',
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(Post)
        })
        .then(() => {
            console.log("Success Added");
            setPending(false);
            //history.go(-1); //return to the last page
            history.push('/') //redirect to home page
        })
    }

    return ( 
        <div className="w-full">
            <h1>Add New Post</h1>
            <form className="flex flex-col gap-m p-8 items-start" onSubmit = {handleSubmit}>
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
                    <option value="Zeena farag"> zeena farag</option>
                </select>
                { !Pending && <input type="submit" className="bg-success subBtn text-dark p-3 rounded-sm"/>}
                { Pending && <input type="Loading ..." disabled className="bg-success subBtn text-dark p-3 rounded-sm"/>}

                <p>{title}</p>
                <p>{body}</p>
                <p>{userName}</p>

            </form>
    </div>
     );
}
 
export default Create;