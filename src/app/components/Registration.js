import React from "react";
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const paperstyle = {
    width:'500',
    height:'750'
};

const style = {
  margin: 12,
};




export class Registration extends React.Component{

  OnSubmit = (e) => {
        e.preventDefault();
        console.log('Hello');
    };
        render(){
          return(
            <Paper zDepth={2} style={this.paperstyle} className="col-md-4" >
            <TextField hintText=" First Name"/>
            <br/>
            <TextField hintText="Email"/>
            <br/>
            <RaisedButton label="Submit" primary={true} style={style} onTouchTap={this.OnSubmit}/>
            </Paper>

          );
        }
}
