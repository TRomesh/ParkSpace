import React from 'react';
import Paper from 'material-ui/Paper';
import AutoComplete from 'material-ui/AutoComplete';

const stylePaper = {
  height: 100,
  width: '90%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const style = {
   width:'100%',
   padding:0,
   margin:0
}

class WheretoPark extends React.Component{


    constructor(props){
       super(props);
       this.state = {
       dataSource: [],
       };
    }


    componentDidMount = () => {
      
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
       <Paper style={style}>
         <Paper style={stylePaper} zDepth={4}>
           <AutoComplete dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput}
            hintText="Where to park?"
            fullWidth={true}
            textFieldStyle={{fontSize:'25px'}}
            style={{margin:20,width:'90%'}}/>
         </Paper>
       </Paper>
     );
   }
}

export default WheretoPark;
