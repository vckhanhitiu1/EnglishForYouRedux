import * as type from '../constants/ActionTypes';

let initialState = {
    message: 'Hello'
}

export const TodoReducer = (state=initialState,action)=>{
    switch (action.type){
        case type.HELLO_WORLD:
            return Object.assign({},state,{
                message: 'Hello, World!'
            });

        case type.H_RESET:
            return state = initialState;

        default:
            return state;
    }
}
