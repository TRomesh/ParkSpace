import React from 'react';
import ChatThread from './chatThread';


class chatContainer extends React.Component{
   render(){
     return(
         <div className="row">
            <ChatThread/>
         </div>
     );
   }
}

export default chatContainer;
