import { combineReducers } from 'redux';
import StartReducer from './StartReducer';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

export default combineReducers({
    StartReducer,
    routing: routerReducer
});