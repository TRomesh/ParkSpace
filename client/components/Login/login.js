import React,{PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import LoginScreenImg from '../../media/images/login_screen.jpg';
import {Link} from 'react-router';

const backgroundstyle ={
   backgroundImage: 'url(' + LoginScreenImg + ')',
   position: 'absolute',
   width:'100%',
   height: '91%'
};

const stylep = {
  margin: 20
};

const styleb = {
    margin: 20
};

const style = {
  height:300,
  width:400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Login extends React.Component{

  constructor(props,contex){
     super(props,contex);

  }

  render(){
    return(
       <div style={backgroundstyle}>
          <Paper style={style} zDepth={2} className="row">
           <TextField hintText="Email or Username" floatingLabelText="Email"/>
           <TextField hintText="" floatingLabelText="Password"/>
           <br/>
           <RaisedButton style={styleb} label="Login"/>
         </Paper>
     </div>
    );
  }


}




export default Login;
