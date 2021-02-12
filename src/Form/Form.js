import React, { useState , useEffect } from 'react';

const CustomForm = () => {
    
    const [id ,setId] = useState(3); 
    const [option, setOption] = useState(""); //store the option we add
    const [inputValues , setInputValues] = useState({}); //store each form input values
    const chars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','Q','R','S','T','U','V','W','X','Y','Z'];
    const [inputList,SetInputList] = useState([ //List of our input List with initilization of Id , name attr with Txt , default value
        {
            id:0 , txt : "input-0", defaultValue : 'option 1'
        },
        {
            id:1 , txt : "input-1", defaultValue : 'option 2'
        },
        {
            id:2 ,txt : "input-2" , defaultValue : 'option 3'
        }
    ]);

    const handleChange = (e) => {
        const updatedValue = {}
        updatedValue[e.target.name] = e.target.value;
        setInputValues({...inputValues , ...updatedValue})
   }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(inputValues);
    }

    const removeElm = (index,name) => {
        const newInputList = [...inputList];
        newInputList.splice(index, 1);
        SetInputList(newInputList);
        delete inputValues[name];
    }

    const addItem = (e) => {
        e.preventDefault();
        setId(id + 1);
        SetInputList ([...inputList, { id:id,txt:`input-${id}`}]);
    };

    const addOption = (e) => {
        e.preventDefault();
        setId(id + 1);
        SetInputList ([...inputList, { id:id,txt:`input-${id}`, defaultValue:`${option}`}]);
        const updatedValue = {}
        updatedValue[`input-${id}`] = `${option}`;
        setInputValues({...inputValues , ...updatedValue});
        setOption("");
    }
    return ( 
        <form className="customForm" onSubmit={handleSubmit}>
            <div className="suctomcontainer">
                {inputList.map((elm, index) => (
                    <div key={elm.id} className="elm-container">
                        <span className="color-grey mr-l">
                            <svg width="16" height="6" viewBox="0 0 16 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16 0H0V2H16V0ZM0 6H16V4H0V6Z" fill="#8D9A9E"></path>
                            </svg>                
                        </span>
                        <div className="inputContainer">
                            <span className="charInput"> {chars[index]} </span>
                            <input
                            placeholder = {elm.value} 
                            name = {elm.txt}
                            defaultValue = {elm.defaultValue}
                            value = {inputValues.txt}
                            onChange = {handleChange} required/> 
                        </div>
                        <button className="color-error ml-s focus:outline-none" 
                        onClick={() => removeElm(index , elm.txt)}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 11H17V13H7V11Z" fill="#FE544A"></path>
                            <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z" fill="#FE544A"></path>
                            </svg>                
                        </button>
                    </div>
                ))}
                <div className="childContainer">
                    <button className="color-grey w-6 h-6" onClick={addOption}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7Z" fill="#00A8E8"></path>
                        <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z" fill="#00A8E8"></path>
                        </svg>
                    </button>
                    <div className="addContainer">
                      <input type="text" className="addOption"
                      value={option}
                      placeholder="Add new option"
                      onChange={e => setOption(e.target.value)} />
                    </div>
                </div>
                <button onClick={addItem} className="addBtn">
                ADD NEW INPUT
                </button>
            </div>
            <button type="submit" className="SubmitBtn"> submit </button>
        </form>
     );
}

export default CustomForm;