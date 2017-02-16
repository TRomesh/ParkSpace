import AppConstants from '../Constants/AppConstants';
import {dispatch,register} from '../Dispatcher/Dispatcher';
import axios from 'axios';

axios.defaults.headers.common['X-Mashape-Key'] = localStorage.getItem('token');

export default {


  WheretoPark(park) {
    console.log('action post');
    axios.post('http://localhost:3000/park',park).then((response)=>{
      console.log(response);
       dispatch({ actionType: AppConstants.WHERE_TO_PARK,data:response.data});
      }).catch((err)=>{
         console.log(err);
     });
   }



}
