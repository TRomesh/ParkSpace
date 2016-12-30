import React from 'react';
import Paper from 'material-ui/Paper';
import AutoComplete from 'material-ui/AutoComplete';


class mapSidebar extends React.Component{

    constructor(props,context){
       super(props,context);
       this.state = {
         dataSource: []
       };

    }

    handleUpdateInput = (value) => {
      this.setState({
        dataSource: [
          value,
          value + value,
          value + value + value,
        ],
      });
    };


    render(){
      return(
        <div>
          <Paper zDepth={2}>
            <div>Hello</div>
            <div>
                <AutoComplete
                  hintText="Destinantion"
                  dataSource={this.state.dataSource}
                  onUpdateInput={this.handleUpdateInput}
                />
            </div>
          </Paper>
        </div>
      );
    }

}

export default mapSidebar;
