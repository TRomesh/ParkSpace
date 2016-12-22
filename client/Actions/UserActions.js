import AppConstants from '../Constants/AppConstants';
import {dispatch,register} from '../Dispatcher/Dispatcher';
import axios from 'axios';

export default {

   AddUser(user) {
     console.log('action');
     axios.post('http://localhost:3000/user',user).then((response)=>{
       console.log(response);
        dispatch({ actionType: AppConstants.ADD_USER,data:response.data});
       }).catch((err)=>{
          console.log(err);
      });
    }

}
