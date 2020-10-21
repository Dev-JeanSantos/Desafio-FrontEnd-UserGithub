import React, { ReactNode } from 'react';
import './styles.css';

type Props = {
    text:string
    children?: ReactNode;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => any;
}

const Button = ({text, children, onClick}: Props) =>(

    <button className="btn-icon">
        {children}
        <div className='btn-text' onClick={onClick}>{text}</div>
    </button>
    

);


export default Button;