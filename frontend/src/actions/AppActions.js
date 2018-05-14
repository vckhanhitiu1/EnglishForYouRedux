import * as type from '../constants/AppConstants';

// export const OPENING_STATE = 'OPENING_STATE';
// export const SIGNING_IN = 'SIGNING_IN';
// export const POPOVER_OPEN_STATE = 'POPOVER_OPEN_STATE';

export const handle_toggle_leftnav =()=>{
    return{
        type: type.OPENING_STATE,
    }
}

export const handle_leftnav_change=(open)=>{
    return{
        type: type.OPENING_STATE_WITH_VALUE,
        boolean: open,
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