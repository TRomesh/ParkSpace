import React from 'react';
import MapSidebar from './mapSidebar';
import Map from './map';
import Paper from 'material-ui/Paper';
import ParkGrid from './parkGrids';
import MapBN from './mapBottomNavigation';

const mapContainerStyle ={
  padding:0,
  margin:0
}

const mapContainerStylediv = {
  width:'110%'
}

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
        <div className="container" style={mapContainerStyle}>
          <div className="row" style={mapContainerStylediv}>
              <div className="col-md-4 col-xs-4 col-lg-4 col-sm-4" style={mapContainerStyle}>
                <MapSidebar/>
              </div>
              <div className="col-md-8 col-xs-8 col-lg-8 col-sm-8" style={mapContainerStyle}>
                  <Map center={center} markers={marker} className="col-md-12"/>
                  <div className="w-100"></div>
                  <MapBN/>
              </div>
          </div>
        </div>
      );
    }
}

export default mapContainer;
