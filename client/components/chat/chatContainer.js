import React from 'react';
import ChatThread from './chatThread';
import Chatbox from './chatbox';


class chatContainer extends React.Component{
   render(){
     return(
         <div className="row">
            {/*<ChatThread/> */}
            <Chatbox/>
         </div>
     );
   }
}

export default chatContainer;
