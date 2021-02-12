import { React , useState } from "react";
import UserImg from '../atoms/UserImg';

const UserPost = () => {

    const [status , setStatus] = useState("true");

    const handleToggle = () => {
        console.log(status);
        setStatus(!status);
    };

    return ( 
        <div className="flex flex-row gap-2 text-xs font-normal align-center items-center m-8">
        <div>
         <label className="switch">
           <input type="checkbox" className="switch-checkbox" onClick={handleToggle} />
           <span className="slider round"></span>
         </label>

        </div>
        <p className="pr-m">
          hide my identity
        </p>
        <UserImg status = {status} />
        </div>
     );
}
 
export default UserPost;
