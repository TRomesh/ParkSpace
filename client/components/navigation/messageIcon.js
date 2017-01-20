import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import Badge from 'material-ui/Badge';
import ReactTooltip from 'react-tooltip'
import ChatIcon from 'material-ui/svg-icons/communication/message';

class MessageIcon extends React.Component{

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

  messageList =()=>{
    return this.state.messages.map((msg,i) => <MenuItem key={i} value={msg.value} primaryText={msg.text}/>);
  }

  messageCount = () => {
    return this.state.messages.length;
  }


   render(){
     return(
       <Badge
          badgeContent={this.messageCount()}
          secondary={false}
          badgeStyle={{top: 0,left:25,height:20,width:20}}
          style={{padding:0}}
        >
            <IconMenu
                iconButtonElement={<IconButton><ChatIcon data-tip="Messages" /></IconButton>}
                anchorOrigin={{"horizontal":"right","vertical":"center"}}
                targetOrigin={{"horizontal":"right","vertical":"top"}}
                maxHeight={272}
                >
                {this.messageList()}
                </IconMenu>
                <ReactTooltip place="bottom" type="dark" effect="float"/>
        </Badge>
     );
   }
}

export default MessageIcon;
