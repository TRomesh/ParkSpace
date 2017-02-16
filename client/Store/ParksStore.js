import {dispatch,register} from '../Dispatcher/Dispatcher';
import AppConstants from '../Constants/AppConstants';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';
var ParkData=[];

const ParkStore = Object.assign(EventEmitter.prototype,{
  emitChange(){
    this.emit(CHANGE_EVENT)
  },
  addChangeListener(callback){
    this.on(CHANGE_EVENT,callback);
  },
  removeChangeListener(callback){
    this.removeListener(CHANGE_EVENT,callback)
  },
  setParkData(data){
    ParkData=data;
  },
  getParkData(){
    return ParkData;
  }
});

  dispatcherIndex:register((action)=>{
     switch (action.actionType) {
       case AppConstants.WHERE_TO_PARK:
              ParkStore.setParkData(action.data);
              ParkStore.emitChange();
              break;
     }

     ParkStore.emitChange();

  });


export default ParkStore;
