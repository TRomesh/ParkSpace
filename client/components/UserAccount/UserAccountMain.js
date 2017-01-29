import React from 'react';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

const style = {
   main: {
      width:'100%'
   },
   content:{
     padding:20
   }
}

class UserAccountMain extends React.Component{
   render(){
     return(
       <Paper style={style.main}>
          <div>
            <Subheader>Recent chats</Subheader>
          </div>
       </Paper>
     );
   }
}

export default UserAccountMain;
