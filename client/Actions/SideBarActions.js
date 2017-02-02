import AppConstants from '../Constants/AppConstants';
import {dispatch,register} from '../Dispatcher/Dispatcher';

export default {

      SideBarClick(ClickData){
        dispatch({ actionType: AppConstants.SIDE_BAR_CLICK,data:ClickData});
      }



}
