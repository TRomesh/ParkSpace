import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
   width:'100%',
   padding:0,
   margin:0
}


class LeftSideBar extends React.Component{

   render(){
     return(
       <Paper style={style}>
       <h1>Right Side Bar</h1>
       </Paper>
     );
   }
}

export default LeftSideBar;
