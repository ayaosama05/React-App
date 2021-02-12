import ImageUploader from '../tasks/ImageUploader';
import React , { useEffect, useState } from "react";

const UploadImage = () => {

  const [files,setFiles] = useState([]);

    const getFiles = (e) => {
        const filesArr = [...e.target.files];
        setFiles(filesArr);
    }

    return ( 
        <div className="flex flex-col w-full">
           <div className="w-full bg-grey-shd7 py-3 px-4 flex flex-row justify-center items-center rounded-md border border-dashed border-accent">
             <input type="file" name="file" id="file" className="inputfile" 
                accept="image/*"
                multiple onChange={getFiles}/>
             <label htmlFor="file">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M4 5H17V12H19V5C19 3.897 18.103 3 17 3H4C2.897 3 2 3.897 2 5V17C2 18.103 2.897 19 4 19H12V17H4V5Z" fill="#00A8E8"/>
                 <path d="M8 11L5 15H16L12 9L9 13L8 11Z" fill="#00A8E8"/>
                 <path d="M19 14H17V17H14V19H17V22H19V19H22V17H19V14Z" fill="#00A8E8"/>
                 </svg>
                 <span className="p-xs">Upload one or multiple images</span>
               </label>
           </div>
           <div className="flex flex-row w-full h-full my-xxs gap-xs justify-between mb-m flex-wrap">
           {files.map((file , i) => (
             <div className="flex flex-1 flex-grow flex-col gap-4xs" key={i}>
                <ImageUploader file={file} />
           </div>
            ))}
            </div>
         </div>

     );
}
 
export default UploadImage;