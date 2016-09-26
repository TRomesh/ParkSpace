import React,{PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as userActions from '../actions/userActions';



export class Login extends React.Component{
    constructor(props,contex){
       super(props,contex);
         this.state = {
           user:{name:""}
         };
         this.onNameChange = this.onNameChange.bind(this);
         this.onClickSave = this.onClickSave.bind(this);
    }

    onNameChange(event){
      const user = this.state.user;
      user.name = event.target.value;
      this.setState({user:user});
    }

    onClickSave(){
      this.props.dispatch(userActions.createUser(this.state.user))
    }

    userRow(user,index){
      return <div key={index}>{user.name}</div>;
    }

     render(){
        return(
          <div>
             <h2>Users</h2>
             {this.props.users.map(this.userRow(users,i))}
             <div>
                <TextField hintText=" First Name" onChange={this.onNameChange} value={this.state.user.name}/>
                <RaisedButton label="Save" primary={true} onTouchTap={this.onClickSave}/>
             </div>
          <Link to="/">
          <RaisedButton label="Submit" primary={true}/>
          </Link>
          </div>
        );
     }
}

Login.propType={
  dispatch:PropTypes.func.isRequired,
  user:PropTypes.array.isRequired
};

function mapStateToProps(state,ownProps){
  return{
    user:state.user
  }
};

export default connect(mapStateToProps)(Login);
