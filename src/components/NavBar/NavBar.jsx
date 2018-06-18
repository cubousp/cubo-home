import React, { Component } from 'react'
import './NavBar.css'
import logo from './cubo-deitado.png'
const classNames = require('classnames');

class NavBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            transparent: true
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll() {
        const currentPosition = document.documentElement.scrollTop
        const threshold = 66
        if ((currentPosition > threshold)) {
            this.setState({
                transparent: false
            })
        } else {
            this.setState({
                transparent: true
            })
        }
    }

    render() {
        return (
            <div className={classNames('navbar', { 'transparent': this.state.transparent })}>
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
    }
}


export default NavBar