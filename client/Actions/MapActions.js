import AppConstants from '../Constants/AppConstants';
import {dispatch,register} from '../Dispatcher/Dispatcher';
import axios from 'axios';
import config from '../../server/config';

export default {

   GetDistance(path) {

     axios.get('https://maps.googleapis.com/maps/api/distancematrix/json?origins='+path.origins+'&destinations='+path.destinations+'&key='+config.googleapis).
     then((response)=>{
       console.log(response);
        //dispatch({ actionType: AppConstants.ADD_USER,data:response.data});
       }).catch((err)=>{
          console.log(err);
      });
    },

}
