import React,{PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router';
import UserStore from '../../Store/UserStore';
import UserAction from '../../Actions/UserActions';


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

      this.singUp = this.singUp.bind (this);
      this._onChange = this._onChange.bind (this);
      this.clearData = this.clearData.bind (this);

  }

  componentWillMount(){
    UserStore.addChangeListener(this._onChange);
  }

  componentWillUnmount(){
    UserStore.removeChangeListener(this._onChange);
  }

  _onChange(){

  }

  singUp(){

     let newUser = {
       fname:this.refs.Fname.getValue(),
       lname:this.refs.Lname.getValue(),
       uname:this.refs.Uname.getValue(),
       email:this.refs.Email.getValue(),
       password:this.refs.Pword.getValue()
     }

     UserAction.AddUser(newUser);
  }

  clearData(){
    
  }

  render(){
    return(
       <div>
         <Paper style={style} zDepth={2} className="row">
           <TextField ref="Fname" hintText="Name" floatingLabelText="First Name"/>
           <TextField ref="Lname"  hintText="Name" floatingLabelText="Last Name"/>
           <TextField ref="Uname"  hintText="Name" floatingLabelText="User Name"/>
           <TextField ref="Email"  hintText="eg. xxxxxxx@xxx.xxx" floatingLabelText="Email"/>
           <TextField ref="Pword"  hintText="min. 6 characters" floatingLabelText="Password"/>
           <p style={stylep} className="lead">I have read and agree to the ParkSpace terms and conditions</p>
            <RaisedButton style={styleb} label="Register" onTouchTap={this.singUp}/>
         </Paper>
       </div>
    );
  }


}




export default SignupForm;
