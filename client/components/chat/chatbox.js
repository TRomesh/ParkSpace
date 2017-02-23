import React from 'react';
import io from 'socket.io-client';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const socket = io.connect('http://localhost:3000');

const style = {
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const styleInput = {
    padding:10,
    margin: 10,
    width: '85%'

};

const styleButton = {
    margin:12,
    float:'right'
};

class chatContainer extends React.Component{

    constructor(props){
       super(props);
       this.state={

       };
    }

    chatmessage = () => {
        let message = this.refs.chattext.getValue();
        if(message.length !== 0){
          socket.emit('message', {msg:message,usr:'gune'});
          console.log('emmited');

        }

    }

     Socket =()=>{
       socket.on('chat',function (chatdata){
           console.log('meanna bole',chatdata);
       });
     }

   render(){
     {this.Socket()}
     return(
         <div>
            <Paper style={style} zDepth={2} className="row">
                <TextField
                  hintText="Type message here..."
                  multiLine={true}
                  rows={2}
                  rowsMax={4}
                  style={styleInput}
                  className="col-md-12"
                  fullWidth={true}
                  ref="chattext"
                />
                <div className="col-md-3" style={styleButton} className="row" >
                   <FlatButton label="Send" onTouchTap={this.chatmessage}/>
                   <FlatButton label="Cancel"/>
                </div>
            </Paper>
         </div>
     );
   }
}

export default chatContainer;
