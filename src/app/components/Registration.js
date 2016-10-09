import React from "react";
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';

let BackgroundRegUrl = '../../media/img/BackgroundReg.jpg';

let Backstyles = {
        backgroundImage: 'url(' + BackgroundRegUrl + ')',
        overflow: 'hidden',
        backgroundPosition: 'center center',
			  backgroundRepeat: 'no-repeat',
			  backgroundAttachment: 'fixed',
			  backgroundSize: 'cover',
        position: 'absolute',
        left: 0,
        right: 0,
        height:750

  };

const paperstyle = {
    width:500,
    height:750
};

const style = {
  margin: 12,
};


let validateStatusText = (textStatus)=> {

  if (textStatus.length > 250) {
    return {
            error: '*status is too long',
          };
  }  else if (textStatus === '' || textStatus === null) {
    return {
            error: '*status cannot be empty',
          };
  }  else {
    return true;
  }
};



 let clearText = ()=> {

 };



export class Registration extends React.Component{

  constructor(props,context){
     super(props,context);
     this.state={
       fname:'',
       lname:'',
       email:'',
       pass:''
     };

        this.OnSubmit = this.OnSubmit.bind(this);
  }


  OnSubmit = (e) => {
        e.preventDefault();
        this.setState({fname:this.refs.fname.input.value});
        console.log(this.refs.fname.input.value);
  };

        render(){
          return(
            <div style={Backstyles}>
             <div className="col-xs-12 .col-sm-12 .col-md-12"></div>
             <div className="col-xs-8 .col-sm-8 .col-md-8"></div>
              <Paper zDepth={2} style={this.paperstyle} className="col-xs-4 .col-sm-4 .col-md-4" >
                <div className="col-md-2">
                 <TextField hintText=" First Name" floatingLabelText="First Name" errorText="" ref="fname"/>
                 <br/>
                 <TextField hintText=" Last Name" floatingLabelText=" Last Name" ref="lname" />
                 <br/>
                 <TextField hintText="User Name" floatingLabelText="User Name" ref="uname" />
                 <br/>
                 <TextField hintText="xxxxx@xxx.com" floatingLabelText="Email" ref="email"/>
                 <br/>
                 <TextField hintText="Password" floatingLabelText="Password" ref="pass"/>
                 <br/>
                 <TextField hintText="Re enter Password" floatingLabelText="Password" ref="repass"/>
                 <br/>
                 <div>
                <RaisedButton label="Cancle" className="" secondary={true} style={style} onTouchTap={this.OnSubmit}/>
                <Link to="course">
                <RaisedButton label="Register" className="" primary={true} style={style} onTouchTap={this.OnSubmit}/>
                </Link>
                </div>
              </div>
            </Paper>
            </div>
          );
        }
}

export default Registration;
