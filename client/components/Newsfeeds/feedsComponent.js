import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import LoginScreenImg from '../../media/images/login_screen.jpg';
import avata1 from '../../media/images/avatars/boy-1.svg';

const compoStyle = {
    width:500
};

class feedsComponent extends React.Component{

    constructor(props,context){
       super(props,context);
       this.state = {

       };

    }



    render(){
      return(
        <div>
            <Card zDepth={2} style={compoStyle}>
              <CardHeader
                title="URL Avatar"
                subtitle="Subtitle"
                avatar={avata1}
              />
              <CardMedia
                overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
              >
                <img src={LoginScreenImg} />
              </CardMedia>
              <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
              </CardActions>
            </Card>
        </div>
      );
    }

}

export default feedsComponent;
