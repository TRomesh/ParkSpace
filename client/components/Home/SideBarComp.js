import React from 'react';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

const style = {
   width:'100%',
   padding:0,
   margin:0
}

class SideBarComp extends React.Component{

   render(){
     return(
       <Paper style={style}>
       <Subheader>Here's some parking space!</Subheader>
       <div></div>
       </Paper>
     );
   }
}

export default SideBarComp;
