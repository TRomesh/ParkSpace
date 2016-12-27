import AppConstants from '../Constants/AppConstants';
import {dispatch,register} from '../Dispatcher/Dispatcher';
import axios from 'axios';

export default {

   AddUser(user) {
     console.log('action post');
     axios.post('http://localhost:3000/signup',user).then((response)=>{
       console.log(response);
        dispatch({ actionType: AppConstants.ADD_USER,data:response.data});
       }).catch((err)=>{
          console.log(err);
      });
    },
    GetUser(user) {
      console.log('action get');
      axios.get('http://localhost:3000/user',).then((response)=>{
        console.log(response);
         dispatch({ actionType: AppConstants.ADD_USER,data:response.data});
        }).catch((err)=>{
           console.log(err);
       });
     }

}