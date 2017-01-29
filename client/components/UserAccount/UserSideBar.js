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

let buttonclick =(id) => {
  //  switch (id) {
  //    case 'myparkings':
  //       console.log(id);
  //      break;
  //      case 'freeparking':
  //       console.log(id);
  //      break;
  //      case 'promotions':
  //       console.log(id);
  //      break;
  //      case 'pwp':
  //       console.log(id);
  //      break;
  //      case 'payments':
  //       console.log(id);
  //      break;
  //    default:
   //
  //  }
  console.log(id);
}

class UserSideBar extends React.Component{
   render(){
     return(
       <div>
         <Paper style={style.paper}>
          <Paper style={style.mydiv}>
            <img src={Avatar1} />
          </Paper>
           <Menu>
             <MenuItem primaryText="My Parkings" ref="myparkings" onTouchTap={()=>{console.log(this.ref);}} leftIcon={<AddLocationIcon />} />
             <MenuItem primaryText="Free Parking" ref="freeparking" onTouchTap={this.buttonclick} leftIcon={<BeenHere />} />
             <MenuItem primaryText="Promotions" ref="promotions" onTouchTap={buttonclick(this.id)} leftIcon={<ContentLink />} />
             <Divider />
             <MenuItem primaryText="Park with ParkSpace" ref="pwp" onTouchTap={buttonclick(this.id)} leftIcon={<LocationOn />} />
             <MenuItem primaryText="Payments" ref="payments" onTouchTap={buttonclick(this.id)} leftIcon={<CreditCardIcon />} />
           </Menu>
         </Paper>
       </div>
     );
   }
}

export default UserSideBar;
