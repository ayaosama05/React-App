import { useState } from "react";
import RadioButton from "./radiobutton";

const TabGroup = ({type}) => {
    const [tabs , setTabs] = useState([
        {id:1 , type : "Image Pool" },
        {id:2 ,type : "Text Pool"},
        {id:3 ,type : "Mini Survey"}
    ])

    return ( 
        <div className="flex gap-2 w-full">
        {tabs.map((tab , index) => (
            <RadioButton type={tab.type} key={index} name={type}/>
        ))
        } 
        </div>
     );
}
 
export default TabGroup;