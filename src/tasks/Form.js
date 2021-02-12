import { useState } from "react";
import TabGroup from '../atoms/tabgroup';
import UserInput from '../atoms/userInput';
import UserImg from '../atoms/UserImg';
import Privacy from '../atoms/privacy';
import ButtonAtom from '../atoms/ButtonAtom';
import TxtWithDelete from '../molecules/TxtWithDelete';
import InputAtom from '../atoms/ChoiceIcon';

const Form = () => {

  const [id ,setId] = useState(0);
  const [rows,SetRows] = useState([]);

  const classes = {
    type : "false",
    size : "BtnSmall"
  };

  const addItem = () => {
    setId(id + 1);
    SetRows ([...rows, { id:id,inputValue:''}]);
};

  const deleteRecord = (id) => {
    let newList = [...rows];
    newList.splice(id, 1);
    SetRows(newList);
}
    return ( 
        <div className="flex flex-col items-center justfy-center w-full gap-xs bg-white my-4">
            <Txtinputs rows={rows} deleteRecord={deleteRecord}/>
            <div>
                <button onClick={addItem} className="bg-primary text-white rounded-xs text-base p-2">
                ADD NEW INPUT
                </button>
            </div>
        </div>
     );
}
 
const Txtinputs = (props) => {
       const arrayOfElements = props.rows;
       const chars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','Q','R','S','T','U','V','W','X','Y','Z'];
       const [val ,setVal] = useState();

       return (
           <div>
               {arrayOfElements.map((elm , index) => (
                   <div className="flex flex-row items-center w-full gap-m" key={elm.id}>
                   <span className="color-grey mr-l">
                     <svg width="16" height="6" viewBox="0 0 16 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M16 0H0V2H16V0ZM0 6H16V4H0V6Z" fill="#8D9A9E"></path>
                       </svg>                
                   </span>
                   <div className="mt-xxs flex border border-grey-shd4 p-s rounded-md w-full bg-white gap-4xs">
                   <span className="bg-grey-shd7 w-6 h-6 text-grey text-sm rounded-sm uppercase flex justify-center items-center">
                        {chars[index]}
                    </span>
                      <input type="text" className="text-sm w-full text-grey-shd1 focus:outline-none" placeholder="type caption ( optional )" val={e => setVal(e.target.value)} onBlur={e => elm.inputValue == val}/>
                   </div>
                   <button className="color-error ml-s focus:outline-none" onClick= {() => props.deleteRecord(elm.id)}>
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M7 11H17V13H7V11Z" fill="#FE544A"></path>
                       <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z" fill="#FE544A"></path>
                       </svg>                
                   </button>
               </div>
               ))}
           </div>
       )

}

export default Form;