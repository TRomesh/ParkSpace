import React from 'react';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import FreeParking from './FreeParking';
import MyParking from './MyParking';
import ParkWithPS from './ParkWithPS';
import Promotions from './Promotions';
import Payments from './Payments';
import Store from '../../Store/SideBarStore';


const style = {
   main: {
      width:'100%'
   },
   content:{
     padding:20
   }
}

class UserAccountMain extends React.Component{

  constructor(props){
     super(props);
     this.state={
       content:''
     };

  }

  componentWillMount = () =>{
  Store.addChangeListener(this._onChange);
}

componentWillUnmount = () =>{
  Store.removeChangeListener(this._onChange);
}

_onChange = () =>{
   this.setState({content:Store.getSideBarData()});
}

  subcontent=()=>{
     switch (this.state.content) {
       case 'freeparking':
          return <FreeParking/>
          break;
       case 'myparking':
          return <MyParking/>
          break;
       case 'parkwithps':
          return <ParkWithPS/>
          break;
       case 'promotions':
          return <Promotions/>
          break;
       case 'payments':
          return <Payments/>
          break;

       default:
       return <MyParking/>

     }
  }



   render(){
     return(
       <Paper style={style.main}>
          <div>
            <Subheader>Recent chats</Subheader>
            {this.subcontent()}
          </div>
       </Paper>
     );
   }
}

export default UserAccountMain;
