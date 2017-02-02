import {dispatch,register} from '../Dispatcher/Dispatcher';
import AppConstants from '../Constants/AppConstants';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';
var SideBarData='';

const SideBarStore = Object.assign(EventEmitter.prototype,{
  emitChange(){
    this.emit(CHANGE_EVENT)
  },
  addChangeListener(callback){
    this.on(CHANGE_EVENT,callback);
  },
  removeChangeListener(callback){
    this.removeListener(CHANGE_EVENT,callback)
  },
  setSideBarData(data){
    SideBarData=data;
  },
  getSideBarData(){
    return SideBarData;
  }
});

  dispatcherIndex:register((action)=>{
     switch (action.actionType) {
       case AppConstants.SIDE_BAR_CLICK:
              SideBarStore.setSideBarData(action.data);
              SideBarStore.emitChange();
              break;
     }

     SideBarStore.emitChange();

  });


export default SideBarStore;
