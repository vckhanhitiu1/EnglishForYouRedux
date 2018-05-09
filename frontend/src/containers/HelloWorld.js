import { connect } from 'react-redux';
import {helloworld, reset} from "../actions/TodoActions";
import HelloWorld from "../components/HelloWorld";

const mapStateToProps = (state, ownProps)=>{
    return{
        message: state.TodoReducer.message,
    }
}

const mapDispatchToProps = (dispatch, ownProps)=>{
    return{
        Click: ()=>dispatch(helloworld()),
        Reset: ()=>dispatch(reset()),
    }
}

export const Hello_component = connect(
    mapStateToProps,
    mapDispatchToProps
)(HelloWorld)