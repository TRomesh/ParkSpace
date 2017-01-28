import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

class MessageListDrop extends React.Component{

  constructor(context){
     super(context);
     this.state = {
       messages:[
       {value:"AL",text:"Alabama"},
       {value:"AK",text:"Alaska"},
       {value:"AZ",text:"Arizona"},
       {value:"AR",text:"Arkansas"},
       {value:"CA",text:"California"}
     ]
     };

  }


   render(){
     return(
         <ListItem
           leftAvatar={<Avatar src={this.props.senderpic} />}
           primaryText={this.props.sender}
           secondaryText={
             <p>
              {this.props.message}
             </p>
           }
           secondaryTextLines={2}
         />
     );
   }
}

export default MessageListDrop;
