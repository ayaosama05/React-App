import { React , useEffect, useState } from "react";
import CardList from './CardList';


const Cards = () => {
     const [Cards ,setCards] = useState([
        {id : '1'  , userName : 'Ahmed Hany' , time : '2 hours ago' , imgSrc : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDFp3SmsLXQbccq3Mg7kb3SAadvFOgBTf3Pw&usqp=CAU'},
        {id : '2' , userName : 'Yasser Sherif' , time : '3 days ago' , imgSrc : 'https://thestudentgame.com/wp-content/themes/gbs-jumpstart-child-theme-master/user_images/user-male.png'},
        {id : '3' , userName : 'Amer Latif' , time : '1 month ago' , imgSrc : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDFp3SmsLXQbccq3Mg7kb3SAadvFOgBTf3Pw&usqp=CAU' },
        {id : '4' , userName : 'Yasser Sherif' , time : '5 days ago' , imgSrc : 'https://thestudentgame.com/wp-content/themes/gbs-jumpstart-child-theme-master/user_images/user-male.png'},
    ]); 

    const deleteRecord = (ID) => {
        const newCards = Cards.filter(item => item.id !== ID);
        setCards(newCards);
    }

    useEffect(() => {
        console.log("use effect !!");
    }, []);

    return(
        <div>
            <CardList cards = {Cards} title="All Cards" deleteRecord={deleteRecord}/>
            <CardList cards = {Cards.filter((item) => item.userName === "Yasser Sherif")} title="Yassers'Cards"/>
        </div>
    )
}


export default Cards;
