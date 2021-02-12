const Button = ({classes , text}) => {
    const classess = classes;

    return(
        <button className={`${classess.type ? "primaryBtn" : "secondaryBtn"}
                ${classess.size}`}>
            {text}
        </button>
    );
}

export default Button;