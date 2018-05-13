// export const OPENING_STATE = 'OPENING_STATE';
// export const SIGNING_IN = 'SIGNING_IN';
// export const POPOVER_OPEN_STATE = 'POPOVER_OPEN_STATE';


import * as type from '../constants/AppConstants';

let initialState = {
    opening_state: false,
    signing_in: false,
    popover_open_state: false,
}

export const AppReducer = (state=initialState,action)=>{
    switch (action.type){
        case type.OPENING_STATE:
            return Object.assign({},state,{
                opening_state: true,
            });

        case type.SIGNING_IN:
            return Object.assign({},state,{
                signing_in:true,
            });

        case type.POPOVER_OPEN_STATE:
            return Object.assign({},state,{
                popover_open_state:true,
            });

        default:
            return state;
    }
}