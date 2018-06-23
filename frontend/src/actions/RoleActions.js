import * as type from '../constants/RoleConstants';

export const  handle_role_student_action = () =>{
    return{
        type: type.STUDENT_ROLE,
        value: "student"
    }
}

export const  handle_role_teacher_action = () =>{
    return{
        type: type.TEACHER_ROLE,
        value: "teacher"
    }

}

export const handle_role_teacher_action_function =() =>{
    return function (dispatch) {
        dispatch(handle_role_teacher_action());
    }
}


export const handle_role_student_action_function = () =>{
    return function (dispatch) {
        dispatch(handle_role_student_action());
    }
}

