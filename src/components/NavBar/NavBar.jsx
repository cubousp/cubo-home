import React from 'react'
import './NavBar.css'
import logo from './cubo-deitado.png'
const NavBar = () => (
    <div className="navbar">
        <div className="navbar__logo">
            <img src={logo} alt='cubo-deitado' />
        </div>
        <div className="navbar__content">
            <a>Programação</a>
            <a>Painéis Científicos</a>
            <a>Sobre o CUBO</a>
            <a>Como Chegar?</a>
            <a>Fale Conosco</a>
            <a>Meu Cubo</a>
        </div>
    </div>
)

export default NavBar