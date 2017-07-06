import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

const GettingStartedGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={12}
        defaultCenter={props.center}
    />
));

export default (props) => {
    const center = {lat:props.lat, lng:props.lon };
    return (
        <GettingStartedGoogleMap
            containerElement={<div style={{ height: '200px', width: '250px' }} />}
            mapElement={<div style={{ height: '200px', width: '250px' }} />}
            center={center}
        />
    );
}