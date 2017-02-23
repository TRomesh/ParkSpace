import AppConstants from '../Constants/AppConstants';
import {dispatch,register} from '../Dispatcher/Dispatcher';
import axios from 'axios';
import { browserHistory } from 'react-router'

axios.defaults.headers.common['X-Mashape-Key'] = localStorage.getItem('token');
let token = localStorage.getItem('token');

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
      axios.get('http://localhost:3000/user').then((response)=>{
        console.log(response);
         dispatch({ actionType: AppConstants.ADD_USER,data:response.data});
        }).catch((err)=>{
           console.log(err);
       });
     },
     UserLogin(user) {
       console.log('action post');
       axios.post('http://localhost:3000/login',user).then((response)=>{
         console.log(response.data.token);
         localStorage.setItem('token',response.data.token);
         localStorage.setItem('un',response.data.unu);
         browserHistory.push('/home');
          // dispatch({ actionType: AppConstants.LOGIN_USER,data:response.data});
         }).catch((err)=>{
            console.log(err);
        });
      },


}
