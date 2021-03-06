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
                title={this.props.name}
                subtitle={this.props.title}
                avatar={this.props.avatar}
              />
              <CardMedia
                overlay={<CardTitle title={this.props.posttitle} subtitle={this.props.postsubtitle} />}
              >
                <img src={this.props.postimg} />
              </CardMedia>
              <CardTitle title={this.props.posttitle} subtitle={this.props.postsubtitle}/>
              <CardText>
                {this.props.description}
              </CardText>
              <CardActions>
                <FlatButton label="Like" />
                <FlatButton label="Share" />
              </CardActions>
            </Card>
        </div>
      );
    }

}

export default feedsComponent;
