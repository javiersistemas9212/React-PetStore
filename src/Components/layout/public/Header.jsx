import React from 'react'
import { Nav } from './Nav'
import logo from '../../../assets/img/logo.jpg'

export const Header = () => {
    return (
        <header className="layout__navbar">

            <div className="navbar__header">
                <a href="#" className="navbar__title"><img height="20" src={logo}></img>  </a>
            </div>

            <Nav />


        </header>

    )
}
