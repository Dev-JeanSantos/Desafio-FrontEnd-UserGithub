import React from 'react';
import './styles.css';

type Props = {
    text:string
}

const Button = ({text}: Props) =>(

    <button className="btn-icon">
        <div className="btn-text">{text}</div>
    </button>
    

);


export default Button;