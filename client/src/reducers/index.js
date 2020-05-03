import { combineReducers } from 'redux';
import authReducer from './authReducer';
import scoreReducer from './scoreReducer';
import streakReducer from './streakReducer';

export default combineReducers({
    auth: authReducer,
    users: scoreReducer,
    streak: streakReducer
});