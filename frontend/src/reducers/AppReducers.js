// export const OPENING_STATE = 'OPENING_STATE';
// export const SIGNING_IN = 'SIGNING_IN';
// export const POPOVER_OPEN_STATE = 'POPOVER_OPEN_STATE';


import * as type from '../constants/AppConstants';

let initialState = {
    opening_state: false,
    signing_in: false,
    popover_open_state: false,
    open: false,
}

export const AppReducers = (state=initialState,action)=>{
    switch (action.type){
        case type.OPENING_STATE:
            return Object.assign({},state,{
                opening_state: !state.opening_state,
            });

        case type.OPENING_STATE_WITH_VALUE:
            return Object.assign({},state,{
                open: action.value

            });
            console.log("**************************"+action.value())


        case type.POPOVER_OPEN_STATE_OPEN:
            return Object.assign({},state,{
                popover_open_state:true,
            });

        case type.POPOVER_OPEN_STATE_CLOSE:
            return Object.assign({},state,{
                popover_open_state:false,
            });

        default:
            return state;
    }
}