import React from 'react';
import FeedsComponent from './feedsComponent';


class newsFeedContainer extends React.Component{

    constructor(props,context){
       super(props,context);
       this.state = {

       };

    }



    render(){
      return(
        <div>
          <FeedsComponent/>
        </div>
      );
    }

}

export default newsFeedContainer;
