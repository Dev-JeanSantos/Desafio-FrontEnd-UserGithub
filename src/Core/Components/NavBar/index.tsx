import React from 'react';
import './styles.css';
import { ReactComponent as LogoImage} from '../../Assets/Images/logo.svg';
import { NavLink } from 'react-router-dom';


const Navbar = () =>(

    <nav className= "main-nav">

        <NavLink to="/">
        <div className="container-navbar" >
            <LogoImage className="logo-navbar"/>
        </div>
        </NavLink>
    </nav>

);


export default Navbar;