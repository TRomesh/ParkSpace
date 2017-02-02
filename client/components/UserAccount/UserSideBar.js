import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AddLocationIcon from 'material-ui/svg-icons/maps/add-location';
import CreditCardIcon from 'material-ui/svg-icons/action/credit-card';
import ContentLink from 'material-ui/svg-icons/action/account-balance-wallet';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/action/card-membership';
import LocationOn from 'material-ui/svg-icons/communication/location-on';
import Delete from 'material-ui/svg-icons/action/delete';
import BeenHere from 'material-ui/svg-icons/maps/beenhere';
import Avatar1 from '../../media/images/avatars/boy-2.svg';
import SideBarActions from '../../Actions/SideBarActions';

const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin:0,
    padding:0
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
  mydiv:{
    width:'100%',
    height:300
  }
};



class UserSideBar extends React.Component{

  constructor(props){
     super(props);

  }

  buttonclick =(event) => {
    const {id} = event.target;
    console.log(typeof id);
    SideBarActions.SideBarClick('freeparking');
  }

   render(){
     return(
       <div>
         <Paper style={style.paper}>
          <Paper style={style.mydiv}>
            <img src={Avatar1} />
          </Paper>
           <Menu>
             <MenuItem primaryText="My Parkings" key="myparkings" onTouchTap={()=>{console.log(this.primaryText)}} leftIcon={<AddLocationIcon />} />
             <MenuItem primaryText="Free Parking" id="freeparking" onTouchTap={this.buttonclick} leftIcon={<BeenHere />} />
             <MenuItem primaryText="Promotions" id="promotions" onTouchTap={this.buttonclick} leftIcon={<ContentLink />} />
             <Divider />
             <MenuItem primaryText="Park with ParkSpace" id="pwp" onTouchTap={this.buttonclick} leftIcon={<LocationOn />} />
             <MenuItem primaryText="Payments" id="payments" onTouchTap={this.buttonclick} leftIcon={<CreditCardIcon />} />
           </Menu>
         </Paper>
       </div>
     );
   }
}

export default UserSideBar;
