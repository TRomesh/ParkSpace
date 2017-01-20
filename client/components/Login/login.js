import React,{PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import LoginScreenImg from '../../media/images/login_screen.jpg';
import UserStore from '../../Store/UserStore';
import UserAction from '../../Actions/UserActions';
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

let validateStatusText = (textStatus) => {

 if (textStatus.length > 250) {
   return {
           error: '*search is too long',
         };
 }  else if (textStatus.length == 0) {
   console.log('empty');
   return {
           error: '*search cannot be empty',
         };
 }  else {
   return true;
 }
};

class Login extends React.Component{

  constructor(props,contex){
     super(props,contex);

  }

  componentWillMount = () => {
    UserStore.addChangeListener(this._onChange);
  }

  componentWillUnmount = () => {
    UserStore.removeChangeListener(this._onChange);
  }

  _onChange = () => {

  }

  login = () => {
      console.log('logged');

      let User = {
        email:this.refs.Email.getValue(),
        password:this.refs.Pword.getValue()
      }

      UserAction.UserLogin(User);
  }

  render(){
    return(
       <div style={backgroundstyle}>
          <Paper style={style} zDepth={2} className="row">
           <TextField ref="Email" hintText="Email" floatingLabelText="Email"/>
           <TextField ref="Pword" hintText="" floatingLabelText="Password"/>
           <br/>
           <RaisedButton style={styleb} label="Login" onTouchTap={this.login}/>
           <LinearProgress mode="indeterminate" />
         </Paper>
     </div>
    );
  }


}


export default Login;
