import { useState } from "react";
import TabGroup from '../atoms/tabgroup';
import UserInput from '../atoms/userInput';
import UserImg from '../atoms/UserImg';
import Privacy from '../atoms/privacy';
import ButtonAtom from '../atoms/ButtonAtom';
import TxtWithDelete from '../molecules/TxtWithDelete';

const TextPool = () => {

  const [id ,setId] = useState(0);
  const [rows,SetRows] = useState([]);

  const classes = {
    type : "false",
    size : "BtnSmall"
  };

  const addItem = () => {
    setId(id + 1);
    SetRows ([...rows, { id:id}]);
};

  const deleteRecord = (ID) => {
    let newList = [...rows];
    newList.splice(ID, 1);
    SetRows(newList);
}
    return ( 
        <div className="flex flex-col items-center justfy-center w-full bg-white my-4 rounded-sm">
          <div className="flex flex-col p-m border-b-2 border-grey-shd6 w-full">
       <div className="flex flex-row gap-4 justify-center items-center">
       <UserImg status="avatar" className={classes.avatar}/>
       <TabGroup type="choice1"/>
       </div>
       <UserInput />
       <div className="flex flex-col items-center justify-center gap-xs w-full">
            <TxtWithDelete rows={rows} deleteRecord={deleteRecord}/>
            <div className="w-full mt-xs">
            <button onClick={addItem} className="border border-accent text-sm text-accent bg-white w-full p-2 rounded-md ">Add New option</button>
            </div>
        </div>

          </div>
          <div className="w-full flex flex-col md:flex-row text-xs font-normal align-center items-center justify-between">
          <div className="p-m flex flex-row gap-2 text-xs items-center justify-between w-full">
          <Privacy />
          </div>
          <div className=" p-m flex flex-row justify-between md:justify-end w-full border-t-2 border-grey-shd6 md:border-none">
          <ButtonAtom classes = {classes}
              text="Post"/>
          </div>
        </div>
        </div>
     );
}
 
export default TextPool;