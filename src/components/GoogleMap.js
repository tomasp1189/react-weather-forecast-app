import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

const GettingStartedGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={12}
        defaultCenter={props.center}
    />
));

export default (props) => {;
    return (
        <GettingStartedGoogleMap
            containerElement={<div style={{ height: '100%', width: '100%' }} />}
            mapElement={<div style={{ height: '100%', width: '100%' }} />}
            center={{lat:props.lat, lng:props.lon }}
        />
    );
}