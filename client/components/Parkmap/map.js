import React from 'react';
import markz from '../../media/images/parkicon/parkavailable.svg';
import {GoogleMapLoader, GoogleMap, Marker, InfoWindow,DistanceMatrixService} from "react-google-maps";

const mapStyle={
  width:'100%',
  position: 'relative',
  height: '550px'
};

class map extends React.Component{

    constructor(props,context){
       super(props,context);
       this.state = {};
    }

    render(){

      const mapContainer = <div style={mapStyle}></div>

      let icon = {
          url: markz, // url
          scaledSize: new google.maps.Size(50, 50), // scaled size
          origin: new google.maps.Point(0,0), // origin
          anchor: new google.maps.Point(0, 0) // anchor
      };

      const markers = this.props.markers.map((venue,i) =>{
          const marker ={
             position:{
               lat:venue.location.lat,
               lng:venue.location.lng
             },
             mapTypeId: 'roadmap',
             icon:icon,
             label:'SLIIT',
             clickable:true,
             animation: google.maps.Animation.DROP,
             zIndex:9
          };

          return <Marker key={i} {...marker}>
            <InfoWindow title="Blabla" onTouchTap={this.click}/>
          </Marker>;
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

export default map;
