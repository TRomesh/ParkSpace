import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import AutoComplete from 'material-ui/AutoComplete';
import TimePicker from 'material-ui/TimePicker';

const sidebarContentStyle = {
  padding:20
}

const mapContainerStyle ={
  padding:0,
  margin:0
}


class mapSidebar extends React.Component{

    constructor(props,context){
       super(props,context);
       this.state = {
         dataSource: [],
         value12: null
       };

    }

    handleChangeTimePicker12 = (event, date) => {
      this.setState({value12: date});
    };

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
            <div style={sidebarContentStyle}>
                <AutoComplete
                  hintText="Destinantion"
                  filter={AutoComplete.fuzzyFilter}
                  dataSource={this.state.dataSource}
                  onUpdateInput={this.handleUpdateInput}
                />
                <AutoComplete
                  hintText="Destinantion"
                  filter={AutoComplete.fuzzyFilter}
                  dataSource={this.state.dataSource}
                  onUpdateInput={this.handleUpdateInput}
                />
                <TimePicker
                format="ampm"
                hintText="12hr Format"
                value={this.state.value12}
                onChange={this.handleChangeTimePicker12}
              />
            </div>
                <Divider inset={true} />
          </Paper>
        </div>
      );
    }

}

export default mapSidebar;
