import {dispatch,register} from '../Dispatcher/Dispatcher';
import AppConstants from '../Constants/AppConstants';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';
var UserData=[];

const UserStore = Object.assign(EventEmitter.prototype,{
  emitChange(){
    this.emit(CHANGE_EVENT)
  },
  addChangeListener(callback){
    this.on(CHANGE_EVENT,callback);
  },
  removeChangeListener(callback){
    this.removeListener(CHANGE_EVENT,callback)
  },
  setUserData(data){
    UserData=data;
  },
  getUserData(){
    return UserData;
  }
});

  dispatcherIndex:register((action)=>{
     switch (action.actionType) {
       case AppConstants.ADD_USER:
              UserStore.setUserData(action.data);
              UserStore.emitChange();
              break;
     }

     UserStore.emitChange();

  });


export default UserStore;
