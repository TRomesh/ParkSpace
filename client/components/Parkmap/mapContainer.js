import React from 'react';
import MapSidebar from './mapSidebar';
import Map from './map';
import Paper from 'material-ui/Paper';
import ParkGrid from './parkGrids';
import MapBN from './mapBottomNavigation';


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
        <div  className="container-fluid">
          <div  className="row row-list">
            <MapSidebar className="col-md-6 col-sm-6 col-lg-6"/>
              <div className="col-md-6 col-sm-6 col-lg-6" >
                <Map center={center} markers={marker} />
                <MapBN/>
              </div>
          </div>
        </div>
      );
    }

}

export default mapContainer;
