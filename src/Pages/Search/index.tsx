import React, { useEffect, useState } from 'react';
import Navbar from '../../Core/Components/NavBar';
import { makeRequest } from '../../Core/utils/requests';
import ButtonIcon from '../../Core/Components/ButtonIcon/';
import { User } from '../../Core/Types/User';
import ImageLoader from './Components/Loaders/ImageLoader';
import InfoLoader from './Components/Loaders/InfoLoader';
import './styles.css';

const Search = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [isCLiked, setIsCliked] = useState(false);
    const [user, setUser] = useState<User>();
    const [usuario, setUsuario] = useState(user?.name);

    useEffect(() => {
        setIsLoading(true);
        makeRequest({ url: `${usuario}` })
            .then(response => setUser(response.data))
            .finally(() => {
                setIsLoading(false);
            });
    }, [usuario]);

    const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsuario(event.target.value);
    }

    function handleOnclick() {
        setIsCliked(true);
    }
    return (
        <>
            <Navbar />

            <div className="content-geral">
                <h1 className="content-title"> 
                    Encontre um perfil Github
                </h1>
                    <input
                        type="text"
                        placeholder="Usuario Github"
                        className="form-control"
                        value={usuario}
                        onChange={handleOnchange}
                    />
                    <div className="content-button">
                        <ButtonIcon text='Encontrar' onClick={handleOnclick} />
                    </div>

                {isCLiked &&
                    <div className='info-container'>
                        {isLoading ? (
                            <div className='cont-loader'>
                                <div className='loader-esq'>
                                    <ImageLoader />
                                </div>
                                <div className='loader-dir'>
                                    <InfoLoader />
                                </div>
                            </div>
                        ) : (
                                <>
                                    <div className="coluna1">
                                        <img src={user?.avatar_url} className="container-img"></img>
                                        <div className="button-profile_cont">
                                            <a
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                href={`https://github.com/${usuario}`}
                                            >
                                            <ButtonIcon
                                                text="Ver Perfil" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="coluna2">
                                        <div className="linhas-topo">
                                            <h1 className="container-total-repositorios">
                                                Repositórios públicos: {user?.public_repos}
                                            </h1>
                                            <h1 className="container-total-repositorios">
                                                Seguidores: {user?.followers}
                                            </h1>
                                            <h1 className="container-total-repositorios">
                                                Seguindo: {user?.following}
                                            </h1>                                            
                                        </div>

                                        <div className="linhas-bottom">
                                            <h1 className="form-title">
                                                Informações
                                            </h1>
                                            <h1 className="form-info">
                                                    <strong>Empresa:</strong> {user?.company}
                                            </h1>
                                            <h1 className="form-info">
                                                    <strong>Website/Blog:</strong> {user?.blog}
                                            </h1>
                                            <h1 className="form-info">
                                                    <strong>Localidade:</strong> {user?.location}
                                            </h1>
                                            <h1 className="form-info">
                                                    <strong>Membro desde:</strong> {user?.created_at}
                                            </h1>
                                        </div>
                                    </div>
                                </>      

                            )}
                    </div>}
            </div>
        </>
    );
};
export default Search;