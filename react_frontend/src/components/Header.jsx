import React from 'react';
import logo from '../media/logo.ico'
import Navigation from "./Navigation";
import {Link} from "react-router-dom";

function Header() {

    return (
        <header className="header">
            <div className="navbar">
                <div className="logo">
                    <Link to='/'>
                        <img src={logo} alt="Logo"/>
                    </Link>
                </div>
                <div className="title">
                    <Link to='/'>
                        <h1>Ресторан</h1>
                    </Link>
                </div>
                <Navigation/>
            </div>
        </header>
    );

}

export default Header;