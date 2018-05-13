import * as type from '../constants/AppConstants';

// export const OPENING_STATE = 'OPENING_STATE';
// export const SIGNING_IN = 'SIGNING_IN';
// export const POPOVER_OPEN_STATE = 'POPOVER_OPEN_STATE';

export const opening_state =()=>{
    return{
        type: type.OPENING_STATE,
    }
}

export const signing_in =()=>{
    return{
        type: type.SIGNING_IN,
    }
}

export const popover_open_state =()=>{
    return{
        type: type.POPOVER_OPEN_STATE,
    }
}