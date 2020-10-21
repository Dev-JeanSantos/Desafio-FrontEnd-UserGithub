import React from 'react';
import ButtonIcon from '../../../../Core/Components/ButtonIcon';
import './styles.css';

const FormSearch = () => {
    return (
        <div className="container-resultado">
            <div className="coluna1">
                <div className="container-img ">
                    
            </div>
                <div className="button">
                    <ButtonIcon
                        text="Ver Perfil" />
                </div>
            </div>
            <div className="coluna2">
                <div className="linhas">
                    <div className="container-total-repositorios">
                    </div>
                    <div className="container-total-repositorios">

                    </div>
                    <div className="container-total-repositorios">

                    </div>
                </div>
                <div className="container-info">
                    <div className="form-title">
                        Informações
                </div>
                    <input type="text" placeholder="Empresa:" className="formulario-control"></input>
                    <input type="text" placeholder="WebSite:" className="formulario-control" />
                    <input type="text" placeholder="Localidade:" className="formulario-control" />
                    <input type="text" placeholder="Membro desde:" className="formulario-control"></input>
                </div>
            </div>
        </div>

    );
};
export default FormSearch;


