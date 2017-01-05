import React from 'react';
import NoParking404 from '../../media/images/NoParking404.png';

const ErrorStyle = {
  width:300,
  height:300,
  margin:20
}
const textStyle = {
  width:300,
  height:300
}

class Error404 extends React.Component{
   render(){
     return(
         <div className="row">
           <div className="col-md-2 col-md-offset-5">
             <img src={NoParking404} style={ErrorStyle}/>
             <h1 className="text-center" style={textStyle}><p>404 Error! Page Not Found</p></h1>
           </div>
         </div>
     );
   }
}

export default Error404;
