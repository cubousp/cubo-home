import React from 'react'
import moovit from './moovit.png'
import cabify from './cabify.png'
import './Location.css'
import Map from './Map'
import ScrollAnimation from 'react-animate-on-scroll'
import Hidden from '@material-ui/core/Hidden';

const Location = () => (
    <div>
        <Hidden mdDown>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <div className="location">
                    <div className="location__header">
                        <h1>Como chegar</h1>
                    </div>
                    <div className="location__content">
                        <div className="location__content-info">
                            <h4>FOUSP</h4>
                            <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <span>
                                    Faculdade de Odontologia da Universidade de São Paulo
                                </span><br/>
                                <span >
                                    Av. Professor Lineu Prestes, 2227
                                </span><br/>
                                <span>
                                    Butantã, São Paulo - SP
                                </span>
                            </div>
                            <div style={{ width: 'fit-content' }}>
                                <div className="location__content-info-moovit">
                                    <div>
                                        <h4>Vai vir de transporte público?</h4>
                                        <div>
                                            <a
                                                href={'https://moovit.com/?to=Avenida%20Professor%20Lineu%20Prestes%202227&tll=-23.566951_-46.738353&metroId=242&lang=en'}
                                                target={'_blank'}
                                            >
                                                Clique
                                            </a>
                                            <span> para receber as direções no Moovit!</span>
                                        </div>
                                    </div>
                                    <div>
                                        <img alt="Moovit" src={moovit}/>
                                    </div>
                                </div>
                                { process.env.REACT_APP_INSCRIPTION_OPEN === 'true' &&
                                    <div>
                                        <h6 style={{ marginLeft: -64 }}>ou</h6>
                                        <div className="location__content-info-cabify">
                                            <div>
                                                <h4>Use o cupom CUBOUSP</h4>
                                                <span>e receba R$ XX,00 de desconto no Cabify!</span>
                                            </div>
                                            <div>
                                                <img alt="Cabify" src={cabify}/>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="location__content-maps">
                            <Map
                                isMarkerShown
                                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBteStZaf37nN-bstBYU3gU2StOau48mz8&v=3.exp&libraries=geometry,drawing,places"
                                loadingElement={<div style={{ height: '100%' }} />}
                                containerElement={<div style={{ height: '100%', width: '100%' }} />}
                                mapElement={<div style={{ height: '100%' }} />}
                            />
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </Hidden>
        <Hidden mdUp>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <div className="location" style={{ marginTop: 32 }}>
                    <div className="location__header">
                        <h1 style={{ fontSize: 24, lineHeight: '32px' }}>Como chegar</h1>
                    </div>
                    <div className="location__content" style={{
                        marginTop: 32, justifyContent: 'center'
                    }}>
                        <div className="location__content-info" style={{
                            margin: 0,
                            padding: 16
                        }}>
                            <h4 style={{
                                textAlign: 'center',
                                fontSize: 18
                            }}>FOUSP</h4>
                            <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <span style={{
                                    textAlign: 'center',
                                    fontSize: 16
                                }}>
                                    Faculdade de Odontologia da Universidade de São Paulo
                                </span><br/>
                                <span style={{
                                    textAlign: 'center',
                                    fontSize: 16
                                }}>
                                    Av. Professor Lineu Prestes, 2227
                                </span><br/>
                                <span style={{
                                    textAlign: 'center',
                                    fontSize: 16
                                }}>
                                    Butantã, São Paulo - SP
                                </span>
                            </div>
                            <div style={{ width: '100%' }}>
                                <div className="location__content-info-moovit" style={{ justifyContent: 'center' }}>
                                    <div>
                                        <h4 style={{
                                            fontSize: 14,
                                            marginBottom: 0,
                                            marginTop: 8
                                        }}>Vai vir de transporte público?</h4>
                                        <div>
                                            <a
                                                href={'https://moovit.com/?to=Avenida%20Professor%20Lineu%20Prestes%202227&tll=-23.566951_-46.738353&metroId=242&lang=en'}
                                                target={'_blank'}
                                                style={{
                                                    fontSize: 12
                                                }}
                                            >
                                                Clique
                                            </a>
                                            <span style={{
                                                fontSize: 12
                                            }}> para ver as direções no Moovit!</span>
                                        </div>
                                    </div>
                                    <div>
                                        <img alt="Moovit" src={moovit} style={{ width: 48}}/>
                                    </div>
                                </div>
                                { process.env.REACT_APP_INSCRIPTION_OPEN === 'true' &&
                                <div>
                                    <h6 style={{ marginLeft: -64 }}>ou</h6>
                                    <div className="location__content-info-cabify">
                                        <div>
                                            <h4>Use o cupom CUBOUSP</h4>
                                            <span>e receba R$ XX,00 de desconto no Cabify!</span>
                                        </div>
                                        <div>
                                            <img alt="Cabify" src={cabify}/>
                                        </div>
                                    </div>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div style={{ height: 160, marginTop: 32 }}>
                        <Map
                            isMarkerShown
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBteStZaf37nN-bstBYU3gU2StOau48mz8&v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: '100%' }} />}
                            containerElement={<div style={{ height: '100%', width: '100%' }} />}
                            mapElement={<div style={{ height: '100%' }} />}
                        />
                    </div>
                </div>
            </ScrollAnimation>
        </Hidden>
    </div>
)

export default Location