import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {

    return (
        <nav className="navigation">

            <NavLink to="/" className="nav-link" activeClassName="active">
                Главная
            </NavLink>

            <NavLink to="/recipes" className="nav-link"
                     activeClassName="active">
                Рецепты
            </NavLink>

            <NavLink to="/about" className="nav-link"
                     activeClassName="active">
                О сайте
            </NavLink>

        </nav>
    );

};

export default Navigation;