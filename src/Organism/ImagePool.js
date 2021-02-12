import TabGroup from '../atoms/tabgroup';
import UserInput from '../atoms/userInput';
import UploadImage from '../atoms/uploadImages';
import Privacy from '../atoms/privacy';
import ButtonAtom from '../atoms/ButtonAtom';
import UserImg from '../atoms/UserImg';

const ImagePool = () => {

  const classes = {
    type : "false",
    size : "BtnSmall"
  };

    return ( 
        <div className="flex flex-col items-center justfy-center w-full bg-white my-4 rounded-sm">
          <div className="flex flex-col p-m border-b-2 border-grey-shd6 w-full">
          <TabGroup type="choice2"/>
          <div className="flex flex-row justify-start items-center gap-m">
          <UserImg status="avatar" className={classes.avatar}/>
          <UserInput />
          </div>
          <UploadImage />
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
 
export default ImagePool;