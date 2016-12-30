import React from 'react';
import MapSidebar from './mapSidebar';
import Map from './map';

const center = {
    lat: 6.9147,
    lng: 79.9733
};

const marker = [{
    location:{
      lat: 6.9147,
      lng: 79.9733
    }
}];

class mapContainer extends React.Component{

    constructor(props,context){
       super(props,context);
       this.state = {};
    }

    render(){
      return(
        <div>
        <h1>MAP</h1>
        <Map center={center} markers={marker}/>
        <MapSidebar/>
        </div>
      );
    }

}

export default mapContainer;
