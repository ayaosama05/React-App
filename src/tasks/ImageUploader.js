import { useEffect, useState } from "react";
import useImage from './UseImage';

const ImageUploader = (props) => {

    const file = props.file;
    const [fileURL , setFileURL] = useState('');
    const {response , progress , uploaded} = useImage(file);

    useEffect(() => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file); //local path
        fileReader.addEventListener("load",function(e){
            setFileURL(e.target.result);
        })
    },[file])

    return ( 
        <div className="w-full h-full rounded-md overflow-hidden relative">
            {uploaded && progress === 100 ? <img src={fileURL} className="w-full"/> : null}
            <div className="absolute bottom-m right-m flex flex-row h-1/4">
            </div>
        </div>
     );
}
 
export default ImageUploader;