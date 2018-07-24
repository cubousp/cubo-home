import React, { Component } from 'react'
import './NavBar.css'
import logo from './cubo-deitado.png'
import { Link } from 'react-scroll'
import Hidden from '@material-ui/core/Hidden';
import TemporaryDrawer from './TemporaryDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const classNames = require('classnames');

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transparent: true,
            open: false
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    toggleDrawer = (open) => () => {
        this.setState({
            open
        });
    };

    close = () => {
        this.setState({
            open: false
        })
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
            <div>
                <Hidden mdDown>
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
                                to="sponsors"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                className="hover-underline-animation"
                            >
                                Patrocínio
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
                            { process.env.REACT_APP_INSCRIPTION_OPEN === 'true' &&
                                <a className="hover-underline-animation">
                                    Meu Cubo
                                </a>
                            }
                        </div>
                    </div>
                </Hidden>
                <Hidden mdUp>
                    <div>
                        <AppBar style={{ backgroundColor: 'rgba(22, 85, 126, 0.9)' }}>
                            <Toolbar style={{ display: 'flex' }}>
                                <img src={logo} alt='cubo-deitado' style={{ height: 28, cursor: 'pointer'}}/>
                                <div style={{ flexGrow: 1 }}/>
                                <IconButton color="inherit" aria-label="Menu">
                                    <MenuIcon onClick={this.toggleDrawer(true)}/>
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        <TemporaryDrawer close={this.close} open={this.state.open}/>
                    </div>
                </Hidden>
            </div>
        )
    }
}


export default NavBar