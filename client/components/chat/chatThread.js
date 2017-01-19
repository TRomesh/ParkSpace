import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import io from 'socket.io-client';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Avatar1 from '../../media/images/avatars/boy-1.svg';
import Avatar2 from '../../media/images/avatars/boy-2.svg';
import Avatar3 from '../../media/images/avatars/boy-3.svg';
import Avatar4 from '../../media/images/avatars/boy-4.svg';
import Avatar5 from '../../media/images/avatars/boy-5.svg';

 const socket = io.connect('http://localhost:3000');


class ListExampleMessages extends React.Component{

    constructor(props,context){
       super(props,context);
       this.state = {};
    }

        render(){
         return(
          <div>
                <ListItem
                  leftAvatar={<Avatar src={Avatar1} />}
                  primaryText={this.props.name}
                  secondaryText={
                    <p>
                      <span style={{color: darkBlack}}>{this.props.message}</span>
                      <span>{this.props.date}</span>
                    </p>
                  }
                  secondaryTextLines={2}
                />
                <Divider inset={true} />
          </div>
        );
      }
}

export default ListExampleMessages;
