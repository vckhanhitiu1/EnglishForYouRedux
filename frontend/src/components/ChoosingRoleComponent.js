import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import "../styles/scss/ChoosingRoleStyle.css";
import FooterComponent from "./FooterComponent";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import RoutesComponent from "./RoutesComponent";
import {handle_role_student_action_function, handle_role_teacher_action_function} from "../actions/RoleActions";

/*const ChoosingRoleComponent = () => (
    <div className="wrapper">
        <div className="card">
            <MuiThemeProvider>
                <h1>Choose Your Role</h1>
                <Route>
                    <RaisedButton
                        label="Teacher Registration"
                        labelPosition="before"
                        primary={true}
                        onclick={<Link to="/teachers"></Link>}
                    />
                </Route>

                <Route>
                    <RaisedButton
                        label="Candidate Registration"
                        labelPosition="before"
                        primary={true}
                        onclick={<Link to="/candidates"></Link>}
                    />
                </Route>
            </MuiThemeProvider>

        </div>
        <Router>
            <RoutesComponent/>
        </Router>
    </div>
)*/



class ChoosingRoleComponent extends Component{


    constructor(props){
        super(props);
        this.state = {
            roleUser: null
        }
    }

    handleChoosingSclass ChoosingRoleComponent extends Component{


    constructor(props){
        super(props);
        this.state = {
            roleUser: null
        }
    }

    handleChoosingStudentRole = () => {
        console.log("handle_choosing_role_student" + this.props.roleUser);

        this.props.dispatch(handle_role_student_action_function())
    }


    handleChoosingTeacherRole=() => {
        console.log("handle_choosing_role_teacher" + this.props.roleUser);
        this.props.dispatch(handle_role_teacher_action_function())

    }

    render(){
        return(
            <div className="wrapper">
                <div class="card">
                    <MuiThemeProvider>
                        <h1>Choose Your Role</h1>
                        {/*
                    <Link to ="/teachers" onClick={this.handleChoosingTeacherRole()}></Link>
*/}
                        <RaisedButton
                            label="Teacher Registration"
                            labelPosition="before"
                            primary={true}
                            onclick={<Link to ="/teachers"></Link>}

                            />

                            {/*
                    <Link to ="/candidates" onClick = {this.handleChoosingStudentRole()}></Link>
*/}

                        <RaisedButton
                            label="Candidate Registration"
                            labelPosition="before"
                            primary={true}

                        />
                    </MuiThemeProvider>

                </div>
                <Router>
                    <div>
                        <Link to ="/teachers">Teacher</Link>
                        <Link to ="/candidates">Candidates</Link>
                        <RoutesComponent/>
                    </div>
                </Router>
            </div>
    )
    }
    };

    const mapStateToProps = (state) =>{
        return{
        roleUser: state.RoleReducers.role
    }
    }
    export default connect(mapStateToProps) (ChoosingRoleComponent);tudentRole = () => {
        console.log("handle_choosing_role_student" + this.props.roleUser);

        this.props.dispatch(handle_role_student_action_function())
    }


    handleChoosingTeacherRole=() => {
        console.log("handle_choosing_role_teacher" + this.props.roleUser);
        this.props.dispatch(handle_role_teacher_action_function())

    }

    render(){
        return(
            <div className="wrapper">
                <div class="card">
                <MuiThemeProvider>
                    <h1>Choose Your Role</h1>
{/*
                    <Link to ="/teachers" onClick={this.handleChoosingTeacherRole()}></Link>
*/}
                    <RaisedButton
                        label="Teacher Registration"
                        labelPosition="before"
                        primary={true}
                    onclick={<Link to ="/teachers"></Link>}
                    <Link to ="/teachers" onClick={this.handleChoosingTeacherRole()}/>

                        />

{/*
                    <Link to ="/candidates" onClick = {this.handleChoosingStudentRole()}></Link>
*/}

                    <RaisedButton
                        label="Candidate Registration"
                        labelPosition="before"
                        primary={true}

                        />
                </MuiThemeProvider>

                </div>
                <Router>
                    <div>
                    <Link to ="/teachers">Teacher</Link>
                    <Link to ="/candidates">Candidates</Link>
                    <RoutesComponent/>
                    </div>
                </Router>
            </div>
        )
    }
};

const mapStateToProps = (state) =>{
    return{
        roleUser: state.RoleReducers.role
    }
}
export default connect(mapStateToProps) (ChoosingRoleComponent);