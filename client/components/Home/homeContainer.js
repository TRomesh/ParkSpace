import React from 'react';
import RightSideBar from './RightSideBar';
import LeftSideBar from './LeftSideBar';

const style = {
   width:'100%',
   padding:0,
   margin:0
}


class Home extends React.Component{

   render(){
     return(
       <div className="container-fluid row" style={style}>
         <div className="col-lg-3"><RightSideBar/></div>
         <div className="col-lg-6"><h1>Middle Bar</h1></div>
         <div className="col-lg-3"><LeftSideBar/></div>
       </div>
     );
   }
}

export default Home;
