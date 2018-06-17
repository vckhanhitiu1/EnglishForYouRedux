import { combineReducers } from 'redux';
import { AppReducers } from './AppReducers';
import { RoleReducers } from './RoleReducers';

const RootReducer = combineReducers({
    AppReducers,
    RoleReducers
});

export default RootReducer;