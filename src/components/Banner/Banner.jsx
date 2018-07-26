import React from 'react'
import './Banner.css'
import facebookLogo from './facebook.svg'
import instagramLogo from './instagram.svg'
import Button from '../Button/Button'
import ScrollAnimation from 'react-animate-on-scroll'
import Hidden from '@material-ui/core/Hidden';

const Banner = () => (
    <div>
        <Hidden mdDown>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={0}>
            <div className="banner">
                <div className="banner__content">
                    <div className="banner__content__event-edition">
                        <h1>42º</h1>
                    </div>
                    <div className="banner__content__event-name">
                        <h1>
                            Congresso <br/>
                            Universitário <br/>
                            Brasileiro de <br/>
                            Odontologia <br/>
                        </h1>
                    </div>
                    <div className="banner__content__event-slogan">
                        <h2>O maior congresso universitário de Odontologia do Brasil</h2>
                    </div>
                    <div className="banner__content__event-detail">
                        <div className="banner__content__event-detail__date">
                            <h2>
                                19, 20 e 21 de setembro <br/>
                                Faculdade de Odontologia da USP
                            </h2>
                        </div>
                        { process.env.REACT_APP_INSCRIPTION_OPEN === 'true' &&
                            <div className="banner__content__event-detail__subscribe">
                                 <Button>Inscreva-se</Button>
                            </div>
                        }
                    </div>
                </div>
                <div className="banner__social-media">
                    <a
                        href="https://www.facebook.com/CUBO.USP/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <img className="grow" src={facebookLogo} alt="facebook" />
                    </a>
                    <a
                        href="https://www.instagram.com/cubofousp/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <img className="grow" src={instagramLogo} alt="instagram" />
                    </a>
                </div>
            </div>
            </ScrollAnimation>
        </Hidden>
        <Hidden mdUp>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={0}>
                <div className="banner">
                    <div className="banner__content" style={{ padding: 24 }}>
                        <div className="banner__content__event-edition">
                            <h1 style={{ fontSize: 64 }}>42º</h1>
                        </div>
                        <div className="banner__content__event-name" style={{ margin: 0 }}>
                            <h1 style={{ fontSize: 32, textAlign: 'center'}}>
                                Congresso <br/>
                                Universitário <br/>
                                Brasileiro de <br/>
                                Odontologia <br/>
                            </h1>
                        </div>
                        <div className="banner__content__event-slogan">
                            <h2 style={{ margin: '16px 8px', fontSize: 18, textAlign: 'center' }}>
                                O maior congresso universitário <br/>
                                de Odontologia do Brasil
                            </h2>
                        </div>
                        <div className="banner__content__event-detail" style={{ margin: '32px 8px' }}>
                            <div className="banner__content__event-detail__date" style={{ width: '100%' }}>
                                <h2 style={{ fontSize: 18, textAlign: 'center'}}>
                                    19, 20 e 21 de setembro <br/>
                                    Faculdade de Odontologia da USP
                                </h2>
                            </div>
                            { process.env.REACT_APP_INSCRIPTION_OPEN === 'true' &&
                            <div className="banner__content__event-detail__subscribe">
                                <Button>Inscreva-se</Button>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </Hidden>
    </div>
)

export default Banner
