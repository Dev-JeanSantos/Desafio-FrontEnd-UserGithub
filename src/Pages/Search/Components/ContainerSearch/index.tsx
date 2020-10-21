import React from 'react';
import './styles.css';

type Props = {
    children: React.ReactNode;
}


const ContainerSearch = ({children}: Props) => {
    
 
    return(

        <div className="content-geral">
            <div className="content-title">
                Encontre um perfil Github
            </div>
            {children}
 
        </div>
    );
    
};

export default ContainerSearch;