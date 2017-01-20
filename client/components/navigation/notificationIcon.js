import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import Badge from 'material-ui/Badge';
import ReactTooltip from 'react-tooltip'
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

class NotificationIcon extends React.Component{


  constructor(context){
     super(context);
     this.state = {
       notifiactions:[
       {value:"AL",text:"Alabama"},
       {value:"AK",text:"Alaska"},
       {value:"AZ",text:"Arizona"},
       {value:"AR",text:"Arkansas"},
       {value:"CA",text:"California"}
     ]
     };

  }

  notificationList =()=>{
   return this.state.notifiactions.map((noti,i) => <MenuItem key={i} value={noti.value} primaryText={noti.text}/>);
  }

  notificationCount = () => {
    return this.state.notifiactions.length;
  }

   render(){
     return(
       <Badge
          badgeContent={this.notificationCount()}
          secondary={false}
          badgeStyle={{top: 0,left:25,height:20,width:20}}
          style={{padding:0}}
        >
          <IconMenu
              iconButtonElement={<IconButton><NotificationsIcon data-tip="Notifiactions"/></IconButton>}
              anchorOrigin={{"horizontal":"right","vertical":"center"}}
              targetOrigin={{"horizontal":"right","vertical":"top"}}
              maxHeight={272}
              >
              {this.notificationList()}
              </IconMenu>
              <ReactTooltip place="bottom" type="dark" effect="float"/>
        </Badge>
     );
   }

}

export default NotificationIcon;
