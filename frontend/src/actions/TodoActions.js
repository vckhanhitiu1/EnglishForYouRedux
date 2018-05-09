import * as type from '../constants/ActionTypes';

export const helloworld=()=>{
    return{
        type: type.HELLO_WORLD,
    }
}

export const reset=()=>{
    return{
        type:type.H_RESET,
    }
}
