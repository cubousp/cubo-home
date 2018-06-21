import React from 'react'
import moovit from './moovit.png'
import cabify from './cabify.png'
import './Location.css'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
            {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
        </GoogleMap>
))

const Location = () => (
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
                            <span>Clique para receber as direções no Moovit!</span>
                        </div>
                        <div>
                            <img alt="Moovit" src={moovit}/>
                        </div>
                    </div>
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
            </div>
            <div className="location__content-maps">
                <MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: '100%' }} />}
                    containerElement={<div style={{ height: '100%', width: '100%' }} />}
                    mapElement={<div style={{ height: '100%' }} />}
                />
            </div>
        </div>
    </div>
)

export default Location