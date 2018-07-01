import React, { Component } from 'react'
import './NavBar.css'
import logo from './cubo-deitado.png'
import { Link } from 'react-scroll'
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
                    <Link
                        activeClass="active"
                        to="banner"
                        spy={true}
                        smooth={true}
                        duration={500}>
                        <img src={logo} alt='cubo-deitado' />
                    </Link>
                </div>
                <div className="navbar__content">
                    <Link
                        activeClass="active"
                        to="activities"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className="hover-underline-animation"
                    >
                        Programação
                    </Link>
                    <Link
                        activeClass="active"
                        to="expo"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}
                        className="hover-underline-animation"
                    >
                        Painéis Científicos
                    </Link>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}
                        className="hover-underline-animation"
                    >
                        Sobre o CUBO
                    </Link>
                    <Link
                        activeClass="active"
                        to="location"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}
                        className="hover-underline-animation"
                    >
                        Como Chegar?
                    </Link>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}
                        className="hover-underline-animation"
                    >
                        Fale Conosco
                    </Link>
                    <a className="hover-underline-animation">
                        Meu Cubo
                    </a>
                </div>
            </div>
        )
    }
}


export default NavBar