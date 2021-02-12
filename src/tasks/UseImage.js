import { useEffect, useState } from "react";
import axios from 'axios';

//Custom Hook
const useImage = (file) => {
    const [reponse , setResponse] = useState({});
    const [progress , setProgress] = useState('0');
    const [uploaded , setUploaded] = useState(false);

    const config = {
        onUploadProgress : (progressEvent) => {
            var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            setProgress(percentCompleted);
        }
    }

    useEffect(() => {
        const formData = new FormData();
        formData.append("upload_preset", "hlmywaya"); 
        formData.append("api_key", "379642919495535"); 
        formData.append('file',file);
        axios.post('https://api.cloudinary.com/v1_1/dbh3pacqz/image/upload',formData,{
            onUploadProgress : (progressEvent) => {
                var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                setProgress(percentCompleted);
                console.log(percentCompleted);
            }
        })
          .then(res => {
              console.log(res.data);
            setResponse(res);
            setUploaded(true);
          })
          .catch(err => {
            console.log(err);
        })
    },[file])

    return {reponse ,progress ,uploaded}
}

export default useImage;