import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-scroll'

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class TemporaryDrawer extends React.Component {
    render() {
        return (
            <div>
                <Drawer open={this.props.open} onClose={this.props.close} anchor='right'>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.props.close}
                        onKeyDown={this.props.close}
                    >
                        <div className="navbar__content" style={{ display: 'flex', flexDirection: 'column', padding: 16}}>
                            <Link
                                activeClass="active"
                                to="expo"
                                spy={true}
                                smooth={true}
                                offset={-120}
                                duration={500}
                                className="hover-underline-animation"
                                style={{ marginLeft: 0, marginTop: 20 }}
                                onClick={this.props.close}
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
                                style={{ marginLeft: 0, marginTop: 20 }}
                                onClick={this.props.close}
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
                                style={{ marginLeft: 0, marginTop: 20 }}
                                onClick={this.props.close}
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
                                style={{ marginLeft: 0, marginTop: 20 }}
                                onClick={this.props.close}
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
                                style={{ marginLeft: 0, marginTop: 20 }}
                                onClick={this.props.close}
                            >
                                Fale Conosco
                            </Link>
                            { process.env.REACT_APP_INSCRIPTION_OPEN === 'true' &&
                            <a className="hover-underline-animation" style={{ marginLeft: 0, marginTop: 20 }} onClick={this.props.close}>
                                Meu Cubo
                            </a>
                            }
                        </div>
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default withStyles(styles)(TemporaryDrawer);