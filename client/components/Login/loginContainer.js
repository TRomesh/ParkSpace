import React,{PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {Login} from './login';


export class LoginContainer extends React.Component{

  constructor(props,contex){
     super(props,contex);
  }

  render(){
    return(
       <div>
         <Login/>
       </div>
    );
  }


}
