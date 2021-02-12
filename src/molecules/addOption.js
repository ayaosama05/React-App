import React, { useState } from 'react';

const AddOption = ({addNewOption}) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;

        addNewOption(value);
        setValue("");
    }

    return (
        <div class="flex flex-row mb-xs items-center w-full py-2 gap-m">
              <button class="color-grey w-4 h-4 focus:outline-none" onClick={handleSubmit}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7Z" fill="#00A8E8"></path>
                  <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z" fill="#00A8E8"></path>
                  </svg>              
              </button>
              <div class="mt-xxs flex border border-grey-shd4 py-xs pr-m pl-xs rounded-md w-full bg-white">
                <input type="text" class=" bg-transparent text-sm w-full text-accent focus:outline-none" placeholder="add option" onChange={e => setValue(e.target.value)}/>
              </div>
        </div>
    );
}

export default AddOption;