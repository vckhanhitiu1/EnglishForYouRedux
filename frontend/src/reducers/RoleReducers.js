import * as type from '../constants/RoleConstants';


let initialState ={
    role: null
}

export const RoleReducers = (state = initialState, action) =>{
    switch (action.type){
        case  type.TEACHER_ROLE:
            return Object.assign({},state,{
                role: action.value
            });
        case type.STUDENT_ROLE:
            return Object.assign({},state,{
                role: action.value
            })

        default:
            return state;
    }
}
