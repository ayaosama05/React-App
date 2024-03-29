const UserImg = ({status}) => {

    const classes ={
        avatar : 'imgAvatar',
    }

    const userImgURL = {
        avatar : 'http://www.agenceduciron.fr/assets/admin/img/avatar5.png',
        anonymous : 'data:image/jpeg;base64,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'
    }
    return(
        <img src={`${status ? userImgURL.avatar : userImgURL.anonymous}
               `} className={classes.avatar} alt="user img"/>
    );
}

export default UserImg;