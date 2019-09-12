import {combineReducers} from 'redux';
import mainReducer from './mainReducer';


// This is our store(Global state) structure
export default combineReducers({
    data: mainReducer,
})