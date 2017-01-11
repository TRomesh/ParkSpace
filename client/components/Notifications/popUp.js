import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class popUp extends React.Component{

    constructor(props,context){
       super(props,context);
       this.state = {

       };

    }

    ClickNotify = () =>{
        console.log('notification clicked!');
    }

    render(){
      return(
        <div onTouchTap={this.ClickNotify}>
            <Card>
                <CardHeader
                  title={this.props.name}
                  subtitle={<div></div>}
                  avatar={this.props.avatar}
                />
                <CardText>
                  {this.props.notify}
                </CardText>
            </Card>
        </div>
      );
    }

}

export default popUp;
