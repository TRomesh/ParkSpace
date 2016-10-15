import React,{PropTypes} from 'react';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import DatePicker from 'material-ui/DatePicker';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'


const Sidestyle = {
  height: 612,
  margin: '0px',
  textAlign: 'center',
  display: 'inline-block',
  flex: 1,
  padding:0,
  resizeMode: 'cover',
};

const Mapstyle = {
    height: 100,
    backgroundColor: 'green'
}

const LocDetStyle={
    height: 100,
    padding:0,
    backgroundColor:'#425765',
    fontSize:20,
}

const TimeStyle={
  height: 400,
  backgroundColor:'#f4f4f4',

}


class mapSidebar extends React.Component{

    constructor(props,context){
       super(props,context);

       this.state = {
       selectedIndex: 0,
       open: false
       };

    }

    render() {
    return (
      <div>
        <Paper style={Sidestyle} className="col-md-4" zDepth={2} >
          <div style={LocDetStyle.LocDetStyle} className="col-md-12">
             <br/>
              <div className="col-md-12">
                <span>PARKING NEAR</span>
              </div>
              <div className="col-md-12">
                <i className="material-icons md-light md-36 col-md-1 ">favorite</i>
                <span className="col-md-11">Melrose Ave, Los Angeles, CA</span>
              </div>
          </div>
          <div style={LocDetStyle.TimeStyle}>
            <span className="col-md-12" >PICK A DATE & TIME</span>
          </div>
        </Paper>
        <di className="col-md-8" style={Mapstyle}>

        </di>
      </div>
    );
  }

}


export default mapSidebar;
