import React from 'react'
import avatar from '../../../assets/img/user.png'
import { NavLink } from 'react-router-dom'


export const Nav = () => {
    return (
        <nav className="navbar__container-lists browser-default blue darken-4">

            <ul className="container-lists__menu-list">
                <li className="menu-list__item">
                    <NavLink to="/Home" className="list-end__link">    
                        <i className="fa-solid fa-house"></i>
                        <span className="menu-list__title">Inicio</span>
                    </NavLink>
                </li>

                <li className="menu-list__item">
                    <NavLink to="/Articles" className="list-end__link">    <i className="fa-solid fa-shop"></i>
                        <span className="menu-list__title">Tienda</span>
                    </NavLink>
                </li>

                <li className="menu-list__item">
                    <NavLink to="/Pets" className="list-end__link">     <i className="fa-solid fa-dog"></i>
                        <span className="menu-list__title">Mascotas</span>
                    </NavLink>
                </li>

                <li className="menu-list__item">
                    <NavLink to="/Contact" className="list-end__link">
                        <i className="fa-solid fa-address-book"></i>
                        <span className="menu-list__title">Contacto</span>
                    </NavLink>
                </li>
            </ul>

            <ul className="container-lists__list-end">

                <li className="list-end__item">
                    <NavLink to="/Login" className="list-end__link">
                        <span className="list-end__name">Iniciar sesión</span>
                        <i className="fa-solid fa-user"></i>
                    </NavLink>
                </li>
                <li className="list-end__item">
                    <NavLink to="/Register" className="list-end__link">
                        <span className="list-end__name">Registrarse</span>
                        <i className="fa-solid fa-users"></i>
                    </NavLink>
                </li>
            </ul>

        </nav>
    )
}
