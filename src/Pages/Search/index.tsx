import React from 'react';
import ContainerSearch from './Components/ContainerSearch';
import Navbar from '../../Core/Components/NavBar';
import ButtonIcon from '../../Core/Components/ButtonIcon';
import './styles.css';

const Search = () => (
    <>
        <div>

            <Navbar />
            <ContainerSearch />
            <div className="container-resultado">
                <div className="coluna1">
                    <div className="container-img ">
                        imagem
                    </div>
                    <div className="button">
                        <ButtonIcon text="Ver Perfil" />
                    </div>
                </div>
                <div className="coluna2">
                    <div className="linhas">
                        <div className="container-total-repositorios">
                            total repositorios
                        </div>
                        <div className="container-total-repositorios">
                            total seguidores
                        </div>
                        <div className="container-total-repositorios">
                            total seguindo
                        </div>
                    </div>
                    <div className="container-info">
                        <div className="form-title">
                            Informações
                        </div>
                        <input type="text" placeholder="Empresa:" className="formulario-control" />
                        <input type="text" placeholder="WebSite:" className="formulario-control" />
                        <input type="text" placeholder="Localidade:" className="formulario-control" />
                        <input type="text" placeholder="Membro desde:" className="formulario-control" />
                    </div>
                </div>
            </div>
        </div>

    </>

);

export default Search;