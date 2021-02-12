const CardList = (props) => {
    const cards = props.cards;

   // console.log(props,props.cards);

    return (
        <div>
            <h1 className="text-subtitle">{props.title}</h1>
            {cards.map((card) => (
            <div className="Card" key={card.id}>
            <div className="card-header">
                <div className="user-img">
                  <img src={card.imgSrc} alt="avatar" className="card-avatar"/>
                </div>
                <div className="user-description flex flex-col">
                  <p className="font-medium">{card.userName}</p>
                  <p className="font-light text-dark-grey">{card.time}</p>
                </div>
            </div>
            <span>
               {/*  <button onClick= {() => props.deleteRecord(card.id)}>
                    Delete Record
                </button> */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="#5B6366"/>
                  </svg>                  
            </span>
            </div>
            ))
            }
        </div>
    );
}

export default CardList;

