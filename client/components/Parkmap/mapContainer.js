import React from 'react';
import MapSidebar from './mapSidebar';



class mapContainer extends React.Component{

    constructor(props,context){
       super(props,context);
       this.state = {};
    }

    render(){
      return(
        <div>
        <h1>MAP</h1>
        <MapSidebar/>
        </div>
      );
    }

}

export default mapContainer;
