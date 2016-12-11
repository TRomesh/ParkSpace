import React,{PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router';
import Login from './login';


class LoginContainer extends React.Component{

  constructor(props){
     super(props);
  }

  render(){
    return(
       <div><Login/></div>
    );
  }


}

export default LoginContainer;
