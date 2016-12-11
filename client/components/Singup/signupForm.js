import React,{PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router';
import axios from 'axios';

const stylep = {
  margin: 20
};

const styleb = {

};

const style = {
  height:500,
  width:400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class SignupForm extends React.Component{

  constructor(props,contex){
     super(props,contex);

  }

  singUp(){
      axios.post('/user', {
        fname:'',
        lname:'',
        uname:'',
        email:'',
        password:''
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render(){
    return(
       <div>
         <Paper style={style} zDepth={2} className="row">
           <TextField hintText="Name" floatingLabelText="First Name"/>
           <TextField hintText="Name" floatingLabelText="Last Name"/>
           <TextField hintText="Name" floatingLabelText="User Name"/>
           <TextField hintText="eg. xxxxxxx@xxx.xxx" floatingLabelText="Email"/>
           <TextField hintText="min. 6 characters" floatingLabelText="Password"/>
           <p style={stylep} className="lead">I have read and agree to the ParkSpace terms and conditions</p>
            <RaisedButton style={styleb} label="Register"/>
         </Paper>
       </div>
    );
  }


}




export default SignupForm;
