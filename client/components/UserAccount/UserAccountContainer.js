import React from 'react';
import UserSideBar from './UserSideBar';
import UserAccountMain from './UserAccountMain';

const style = {
   width:'100%',
   padding:0,
   margin:0
}

class UserAccount extends React.Component{
   render(){
     return(
       <div className="container row" style={style}>
       <UserSideBar className="col-md-4 col-xs-4 col-lg-4 col-sm-4"/>
       <UserAccountMain className="col-md-8 col-xs-8 col-lg-8 col-sm-8"/>
       </div>
     );
   }
}

export default UserAccount;
