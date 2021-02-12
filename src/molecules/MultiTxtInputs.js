import { useState } from 'react';
import TxtWithDelete from './TxtWithDelete';

const MultiTxtInput = () => {

    const [rows,setRows] = useState([
        {id: '1',char : 'A' , optionTxt : 'caption 1'},
        {id: '2',char : 'B' , optionTxt : 'caption 2'},
        {id: '3',char : 'C' , optionTxt : 'caption 3'},
        {id: '4',char : 'D' , optionTxt : 'caption 3'},
        {id: '5',char : 'E' , optionTxt : 'caption 3'},

    ]);

    const deleteRecord = (ID) => {
        const newRows = rows.filter(item => item.id !== ID);
        setRows(newRows);
    }

    return(
        <div className="flex flex-col bg-grey-bg items-center justify-center gap-xs w-4/6 my-6 px-5 py-m">
            <TxtWithDelete rows={rows} deleteRecord={deleteRecord}/>
        </div>
    );
}

export default MultiTxtInput;