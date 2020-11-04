const Button = (props) => {
    const {btnName,btnType,handlerEvent} = props;
    return (<button type={btnType} onClick={handlerEvent}>{btnName}</button>);
}

export default Button;