import * as type from '../constants/AppConstants';

// export const OPENING_STATE = 'OPENING_STATE';
// export const SIGNING_IN = 'SIGNING_IN';
// export const POPOVER_OPEN_STATE = 'POPOVER_OPEN_STATE';

export const opening_state_action =()=>{
    return{
        type: type.OPENING_STATE,
    }
}

export const get_state=(open)=>{
    return{
        type: type.OPENING_STATE_WITH_VALUE,
        value: open,
    }
}

export const signing_in =()=>{
    return{
        type: type.SIGNING_IN,
    }
}

export const popover_open_state =()=>{
    return{
        type: type.POPOVER_OPEN_STATE_OPEN,
    }
}

export const handleClosePopOver=()=>{
   return{
       type: type.POPOVER_OPEN_STATE_CLOSE
   }
}


export const on_opening_state_action = () =>{
    return function (dispatch){
        dispatch(opening_state_action());
    }
};

export const on_get_state = () =>{
    return function (dispatch){
        dispatch(get_state());
    }
};


