import React from 'react';
import FontAwesome from 'react-fontawesome';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3000');

let isLogged = () =>{
  const token = localStorage.getItem('token');
  return !(token == undefined);
}



class Home extends React.Component{

  LoggedUser = () => {
   if(isLogged){
     socket.emit('Userlogged',"Tharaka");
   }
 }
 
   render(){
        {this.LoggedUser()}
     return(
       <div>
       <h1>Home :D</h1>
       <FontAwesome
          className='super-crazy-colors'
          name='rocket'
          size='2x'
          spin
          style={{ textShadow: '10px 1px 10px rgba(0, 0, 0, 0.1)' }}
        />
       </div>
     );
   }
}

export default Home;
