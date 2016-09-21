import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';



export class Login extends React.Component{
     render(){
        return(
          <div>
          <Link to="/">
          <RaisedButton label="Submit" primary={true}/>
          </Link>
          </div>
        );
     }
}

export default Login;
