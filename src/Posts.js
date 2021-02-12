import { React , useEffect, useState } from "react";
import PostList from './PostList';
import useFetch from "./useFetch";
import {Link} from 'react-router-dom';

const Posts = () => {

    const {data:posts , Pending , error} = useFetch('http://localhost:8000/Posts');
    const [searchVal , setSearchVal] = useState('');

   /*  useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/Posts')
        .then(res => {
            if(!res.ok){
                throw Error("Can't fetch data for this resource");
            }
            return res.json();
        })
        .then(data => {
            setPosts(data);
            setPending(false);
        })
        .catch(err => {
            setPending(false);
            setError(err.message);
        })
        } , 2000)
    }, []);
 */
    
    const ChangeTxt = (e) => {
        setSearchVal(e.target.value);
    }

    return(
        <div>
            {error && <p> {error} </p>}
            {Pending && <p>Loading Data ... </p>}
            <div className="flex justify-between items-center">
            <Link to="/create" className="bg-accent text-white focus:outline-none p-2">Add New Post</Link>
            <input type="text" placeholder="Search By Username" onChange={ChangeTxt} className="p-2 rounded-xsm border border-error-shd1"/>
            </div>
            {posts && <PostList posts ={posts.filter(item => {
                if(!searchVal) return true
                if(item.userName.toLowerCase().includes(searchVal.toLowerCase())){
                    return true
                }
                return false;
            })}/>}

            <p className="border-2 border-primary-shd3"></p>
            {/*{posts && <PostList posts={posts}/>}*/}
        </div>
    )
}


export default Posts;
