import React from 'react';
import FontAwesome from 'react-fontawesome';

class Home extends React.Component{
   render(){
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
