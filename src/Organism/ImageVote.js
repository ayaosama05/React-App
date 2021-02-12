import TabGroup from '../atoms/tabgroup';
import UserProfile from '../molecules/UserProfile';
import { useState } from 'react';
import IconButton from '../atoms/IconButton';

const ImagePool = () => {
    const [userInfo , setUserInfo] = useState({userName : "Aya Osama" , time:"2 hours ago"});
    const [QuestionTxt , setQuestionTxt] = useState({Qustion : 'Yes or No'});

    return ( 
        <div className="flex flex-col items-center justfy-center w-full bg-white my-4 rounded-sm">
          <div className="flex flex-col p-m border-b-2 border-grey-shd6 w-full">
          <UserProfile userName={userInfo.userName} time={userInfo.time}/>
          </div>
          <div className="flex flex-col p-m border-b-2 border-grey-shd6 w-full rounded-md overflow-hidden relative">
          <img src="https://s3-alpha-sig.figma.com/img/fb61/ebc5/527e5a8d2236dd21746167740838bd1a?Expires=1613952000&Signature=AL5GBLtK8QflXDP8~Fu7kr6gBQ4DJQQ7SeX8xXRd~xEvCOGDEQ1eX5SY9wTN6PagMvDff9Ttuu5yifpyM8SVLZoTMFPXPsoeVunT67zltIrptwsiYkYh2AtYuP-lZp6yDwinOVsphdLP~cxqBnFiYT8uXEjNFfFHmTyUdM2jjjln~qVVWYo7DH3fYChNyQAl86dyKhkbVVnrEJvXNLV3BnPXxbMRJ5pOmmnebOPbwOEOJh4dNyFik~bYZlDkKl18mRNx6~8PomOYMicrNTDjZGK~PUbU7VGB-Nut-h3KHO5VFEJryzx6dt2Ouj-43PUZQofLpstDFPCPdFGtiZHZlA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" 
          className="object-contain w-full"/>
          <div className="relative">
            <IconButton type="like"/>
            <IconButton type="dislike"/>
          </div>
          </div>
        </div>
     );
}
 
export default ImagePool;