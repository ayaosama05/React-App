import { React , useState } from "react";
import Button from './atoms/ButtonAtom';

const ButtonManagement = () => {

    const [BtnType , setBtnType] = useState("false");
    const [BtnSize , setBtnSize] = useState("BtnLarge");

    const handleToggle = () => {
        console.log(BtnType);
        setBtnType(!BtnType);
    };

    const ChangeSize = () => {
      if(BtnSize === 'BtnLarge'){
        setBtnSize('BtnMedium');
      }
      else if( BtnSize === 'BtnMedium'){
        setBtnSize('BtnSmall');
      }
      else
      {
        setBtnSize('BtnLarge');
      }
    };

    const classes = {
      type : BtnType,
      size : BtnSize
    };

    return(
        <div className="flex flex-row justify-between">
            <Button classes = {classes}/>
            <div className="flex flex-row gap-xs">
                <button onClick={handleToggle} className="manageBtn">change type</button>
                <button onClick={ChangeSize} className="manageBtn">change size</button>
            </div>
        </div>
    )
}

export default ButtonManagement;