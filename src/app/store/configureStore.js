import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';

//import reduxImmutableStateInvariant from 'redux-immutable-state-invarient';
//     applyMiddleware(reduxImmutableStateInvariant())

export default function configureStore(initialState){
  return createStore(
     rootReducer,
     initialState
   );
}
