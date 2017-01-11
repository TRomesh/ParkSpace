import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

const mapStyle={
  width:'100%',
  height:600
};

class mapComponent extends React.Component{

    constructor(props,context){
       super(props,context);
       this.state = {};
    }

    render(){

      const mapContainer = <div style={mapStyle}></div>

      const markers = this.props.markers.map((venue,i) =>{
          const marker ={
             position:{
               lat:venue.location.lat,
               lng:venue.location.lng
             }
          }
          return <Marker key={i} {...marker}/>
      })

      return(
        <div>
          <GoogleMapLoader
            containerElement={mapContainer}
            googleMapElement={
              <GoogleMap
                  defaultZoom={17}
                  defaultCenter={this.props.center}
                  option={{streetViewControl:false,mapTypeControl:false}}>
                  {markers}
              </GoogleMap>
            }
          />
        </div>
    );
    }

}

export default mapComponent;
