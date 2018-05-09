import { combineReducers } from 'redux';
import { TodoReducer } from './TodoReducers';

const RootReducer = combineReducers({
        TodoReducer,
});

export default RootReducer;