import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MapComponent from './mapComponent';

class feedsMapComponent extends React.Component{

    constructor(props,context){
       super(props,context);
       this.state = {

       };

    }

    render(){
      return(
        <div>
            <Card>
              <CardHeader
                title={this.props.name}
                subtitle={this.props.title}
                avatar={this.props.avatar}
              />
              <CardMedia
                overlay={<CardTitle title={this.props.parkname}/>}
              >
                <MapComponent center={this.props.center}/>
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

export default feedsMapComponent;
