import React from 'react';

const Button = (props) => {
    return (
        <button className="CounterBtn" onClick = { () => {
            props.sign === "+" ? props.updateCount(1) : props.updateCount(-1)
        }}> {props.sign}
        </button>
    );
}

export default Button;