import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];
const initialState = {}

 const configureStore = createStore(
   combineReducers,
   initialState,
   composeWithDevTools(applyMiddleware(...middleware))
 );

export default configureStore;