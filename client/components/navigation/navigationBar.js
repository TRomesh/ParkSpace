import React from 'react';
import AppBar from 'material-ui/AppBar';
import { browserHistory } from 'react-router'
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import {Link} from 'react-router'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NotificationsIcon from './notificationIcon';
import MessageIcon from './messageIcon';


let isLogged = () =>{
  const token = localStorage.getItem('token');
  return !(token == undefined);
}


class NavigationBar extends React.Component{

  constructor(context){
     super(context);

     this.state = {

     };

  }


  Signout = () =>{
    localStorage.clear();
     browserHistory.push('/');
  }

  render(){
    return(
      <div>
            <AppBar
             title="ParkSpace"
             iconElementLeft={<IconButton></IconButton>}
             iconElementRight={
               isLogged() ?
               <div id="notif">
               <MessageIcon/>
               <NotificationsIcon/>
                  <IconMenu
                    iconButtonElement={
                      <IconButton><MoreVertIcon /></IconButton>
                    }
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  >
                      <MenuItem primaryText="My Account" containerElement={<Link to="about"/>}/>
                      <MenuItem primaryText="Help" containerElement={<Link to="about"/>}/>
                      <MenuItem primaryText="Sign out" onTouchTap={this.Signout} />
                  </IconMenu>
                </div>
                :''
            }
      />
      {this.props.children}
      </div>
    );
  }



}

export default NavigationBar;
