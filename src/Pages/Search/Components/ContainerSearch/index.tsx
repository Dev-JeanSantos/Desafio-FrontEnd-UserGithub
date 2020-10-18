import React from 'react';
import ButtonIcon from '../../../../Core/Components/ButtonIcon';
import './styles.css';

const ContainerSearch = () => (

    <div className="content-geral">
        <div className="content-title">
            Encontre um perfil Github
        </div>
        <div >
            <input type="text" placeholder="Usuário GitHub" className="form-control" />
        </div>
        <div className="content-button">
            <ButtonIcon text="Encontrar"/>
        </div>
    </div>
);


export default ContainerSearch;