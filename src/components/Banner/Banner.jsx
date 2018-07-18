import React from 'react'
import './Banner.css'
import facebookLogo from './facebook.svg'
import instagramLogo from './instagram.svg'
import Button from '../Button/Button'

const Banner = () => (
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
                href="https://www.instagram.com/cubousp/"
                rel="noopener noreferrer"
                target="_blank"
            >
                <img className="grow" src={instagramLogo} alt="instagram" />
            </a>
        </div>
    </div>
)

export default Banner