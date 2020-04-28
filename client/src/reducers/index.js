import { combineReducers } from 'redux';
import authReducer from './authReducer';
import scoreReducer from './scoreReducer';

export default combineReducers({
    auth: authReducer,
    users: scoreReducer
});