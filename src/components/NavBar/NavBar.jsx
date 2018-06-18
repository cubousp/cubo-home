import React from 'react'
import './NavBar.css'
import logo from './cubo-deitado.png'
const NavBar = () => (
    <div className="navbar">
        <div className="navbar__logo">
            <img src={logo} alt='cubo-deitado' />
        </div>
        <div className="navbar__content">
            <a className="hover-underline-animation">Programação</a>
            <a className="hover-underline-animation">Painéis Científicos</a>
            <a className="hover-underline-animation">Sobre o CUBO</a>
            <a className="hover-underline-animation">Como Chegar?</a>
            <a className="hover-underline-animation">Fale Conosco</a>
            <a className="hover-underline-animation">Meu Cubo</a>
        </div>
    </div>
)

export default NavBar