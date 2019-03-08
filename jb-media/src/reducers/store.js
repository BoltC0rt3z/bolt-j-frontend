import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './rootReducer';

const middleware = [thunk];
const initialState = {}

 const configureStore = createStore(
   combineReducers,
   initialState,
   applyMiddleware(...middleware)
 );

export default configureStore;