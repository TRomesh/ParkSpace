import AppConstants from '../Constants/AppConstants';
import {dispatch,register} from '../Dispatcher/Dispatcher';
import axios from 'axios';

axios.defaults.headers.common['X-Mashape-Key'] = localStorage.getItem('token');

export default {




}
