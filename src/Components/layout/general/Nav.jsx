import React from 'react'
import avatar from '../../../assets/img/user.png'
import { NavLink } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth';


export const Nav = () => {

    const { auth } = useAuth();
  

    return (
        <nav className="navbar__container-lists blue darken-4">

            <ul className="container-lists__menu-list">
                <li className="menu-list__item">
                    <NavLink to="/store/Home" className="list-end__link">    
                        <i className="fa-solid fa-house"></i>
                        <span className="menu-list__title">Inicio</span>
                    </NavLink>
                </li>

                <li className="menu-list__item">
                    <NavLink to="/store/Articles" className="list-end__link">   
                        <i className="fa-solid fa-shop"></i>
                        <span className="menu-list__title">Tienda</span>
                    </NavLink>
                </li>

                <li className="menu-list__item">
                    <NavLink to="/store/Pets" className="list-end__link">    
                        <i className="fa-solid fa-dog"></i>
                        <span className="menu-list__title">Mascotas</span>
                    </NavLink>
                </li>

                <li className="menu-list__item">
                    <NavLink to="/store/Contact" className="list-end__link">    
                        <i className="fa-solid fa-address-book"></i>
                        <span className="menu-list__title">Contacto</span>
                    </NavLink>
                </li>
            </ul>

            <ul className="container-lists__list-end">
                <li className="list-end__item">
                    <a href="#" className="list-end__link-image">
                        <img src={avatar} className="list-end__img" alt="Imagen de perfil" />
                    </a>
                </li>
                <li className="list-end__item">
                    <a href="#" className="list-end__link">
                        <span className="list-end__name">{ auth.nick }</span>
                        <i className="fa-solid fa-caret-down"></i>
                    </a>
                </li>
                <li className="list-end__item">
                    <NavLink to="/Store/Logout" className="list-end__link">    
                        <span className="list-end__name">Cerrar sesión</span>
                        <i className="fa-solid fa-right-from-bracket"></i>
                    </NavLink>
                </li>
            </ul>

        </nav>
    )
}
