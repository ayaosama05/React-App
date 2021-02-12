import ChoiceIcon from '../atoms/ChoiceIcon';
import InputAtom from '../atoms/InputAtom';

const TxtWithDelete = (props) => {
  const chars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','Q','R','S','T','U','V','W','X','Y','Z'];

  const rows = props.rows;
  console.log(props);
    return(
      <div className="w-full">
        {rows.map((row , index) => (
          <div className="flex flex-row items-center w-full gap-m" key={row.id}>
          <span className="color-grey mr-l">
            <svg width="16" height="6" viewBox="0 0 16 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0H0V2H16V0ZM0 6H16V4H0V6Z" fill="#8D9A9E"></path>
              </svg>                
          </span>
          <div className="mt-xxs flex border border-grey-shd4 p-s rounded-md w-full bg-white gap-4xs">
             <ChoiceIcon character={chars[index]} />
             <InputAtom />
          </div>
          <button className="color-error ml-s focus:outline-none" onClick= {() => props.deleteRecord(row.id)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 11H17V13H7V11Z" fill="#FE544A"></path>
              <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z" fill="#FE544A"></path>
              </svg>                
          </button>
      </div>
        ))
        }
      </div>
    );
}

export default TxtWithDelete;