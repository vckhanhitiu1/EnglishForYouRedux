import { combineReducers } from 'redux';
import { AppReducers } from './AppReducers';

const RootReducer = combineReducers({
    AppReducers,
});

export default RootReducer;