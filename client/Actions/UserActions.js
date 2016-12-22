import AppConstants from '../Constants/AppConstants';
import {dispatch,register} from '../Dispatcher/Dispatcher';
import axios from 'axios';

export default {
   AddUser(sentence){
     axios.post('http://localhost:3000/user'+sentence).then((response)=>{
        dispatch({ actionType: AppConstants.ADD_DATA,data:response.data});
       }).catch((err)=>{
          console.log(err);
      });

 }

}
