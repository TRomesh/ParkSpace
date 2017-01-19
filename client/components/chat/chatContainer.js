import React from 'react';
import ChatThread from './chatThread';
import Chatbox from './chatbox';
import {List, ListItem} from 'material-ui/List';


let chat = [{
  id:1,
  name:'tharaka',
  message:'hello',
  date:'232323'
},{
  id:2,
  name:'romesh',
  message:'hi',
  date:'232323'
},{
  id:3,
  name:'madushika',
  message:'hey',
  date:'232323'
},{
  id:4,
  name:'dilagni',
  message:'ado',
  date:'232323'
},{
  id:5,
  name:'kasun',
  message:'machan',
  date:'232323'
}];



class chatContainer extends React.Component{

  constructor(props,context){
     super(props,context);
     this.state = {

     };
  }

  chatThreads = () =>{
      return chat.map((data) => <ChatThread key={data.id} name={data.name} message={data.message} date={data.date}/>);
  }

   render(){
     return(
         <div className="row">
            <List>
              {this.chatThreads()}
            </List>
            <Chatbox/>
         </div>
     );
   }
}

export default chatContainer;
