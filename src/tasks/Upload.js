import React , {useState} from 'react';

const Upload = () => {
    const getFiles = (e) => {
        let files = e.target.files;
        console.log(files);
        //check spread syntax support 
        console.log(FileList.prototype[Symbol.iterator]);
        //Like An array
        const filesArr = [...files];
        console.log(filesArr);
        filesArr.map((file) => {
          console.log(file);
          fetch('https://api.cloudinary.com/v1_1/dbh3pacqz/image/upload',{
            method : 'POST',
          })
        })
    }

    return ( 
        <form className="flex flex-col">
           <input type="file" name="file" id="file" className="inputfile" accept="image/*"
             multiple onChange={getFiles}/>
            <button>Upload</button>
         </form>
    );
}
 
export default Upload;