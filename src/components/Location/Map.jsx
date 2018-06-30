import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: -23.5676306, lng: -46.7410861 }}
    >
        {props.isMarkerShown && (
            <Marker
                position={{ lat: -23.5676306, lng: -46.7410861 }}
            />
        )}
    </GoogleMap>
))

export default Map