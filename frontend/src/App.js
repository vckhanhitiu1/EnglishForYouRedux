// # Import core
import React, { Component } from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import {connect} from 'react-redux';

// # Import UI
import AppBar from 'material-ui/AppBar';
import CandidateRegistrationInformationComponent from "./components/CandidateRegistrationInformationPage";
import FileUploadComponent from "./components/FileUploadComponent";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Drawer, FontIcon} from 'material-ui';


// # Import resource
import {on_opening_state_action, on_get_state_action, on_popover_open_state_action, on_popover_open_state_close_action} from "./actions/AppActions";
import RoutesComponent from "./components/RoutesComponent";
import ChoosingRoleComponent from "./components/ChoosingRoleComponent";
import TeacherRegistrationInformationComponent from "./components/TeacherRegistrationInformationPage";
import {CustomRouter} from './components/minicomponents/AppMiniComponents';
import IELTSFilterScoreInformationComponent from "./components/IELTSFilterScoreInformationComponent";

class App extends Component {

    constructor(props){
        super(props)
    }

    handle_toggle_leftnav = () =>{
        console.log("handle_toggle_leftnav");
        this.props.dispatch(on_opening_state_action());
    };

    handle_leftnav_change = (open) => {
        console.log("handle_leftnav_change");
        this.props.dispatch(on_get_state_action(open));
        this.props.dispatch(on_popover_open_state_close_action());
    };

    handleClickPopOver= () =>{
        console.log("handleClickPopOver");
        this.props.dispatch(on_popover_open_state_action());
    };

    handleClosePopOver = () =>{
        console.log("handleClosePopOver");
        this.props.dispatch(on_popover_open_state_close_action());
    };

    handleConditionForChoosingRole(){
        //{this.props.roleUser ? "teacher" : <TeacherRegistrationInformationComponent/> ? "student" : <CandidateRegistrationInformationComponent/> ? <ChoosingRoleComponent/>}

        if (this.props.roleUser === "teacher"){
            return(
                <TeacherRegistrationInformationComponent/>
            )
        }else if (this.props.roleUser === "student"){
            return(<CandidateRegistrationInformationComponent/>)
        }else return(<ChoosingRoleComponent/>)
    }

    renderFontIcon(){
        return(
            <FontIcon className="material-icons">
                <i class="material-icons">&#xE317;</i>
            </FontIcon>
        );
    }

    render() {
        console.log(this.props)
        return (
            <div className="rootStyle">
            <MuiThemeProvider>
                <AppBar title="Title"
                        position="static"
                        zDepth={0}
                        onLeftIconButtonClick={this.handle_toggle_leftnav.bind(this)}
                        iconElementRight={<CustomRouter click={this.handleClickPopOver}
                                                        open={this.props.popover_open_state}
                                                        onRequestClose={this.handleClosePopOver}/>}>
                    {/*<div className="top-bar-right"></div>*/}

                    <Drawer docked={false} width={300}
                            open={this.props.opening_state}
                            onRequestChange={this.handle_leftnav_change}>
                        <AppBar title="Menu"
                                zDepth={0}
                                iconElementLeft={this.renderFontIcon()}
                                onLeftIconButtonClick={this.handle_toggle_leftnav.bind(this)}/>

                    </Drawer>
                </AppBar>

                <main>
                    <a class="google-btn" href="/auth/google">Google+</a>
                </main>
                <IELTSFilterScoreInformationComponent/>
                <FileUploadComponent/>
            <Router>
                <div >
                    <Link to="/login">Log In</Link>
                    <Link to="/registration">Registration Here!</Link>
                    {this.handleConditionForChoosingRole()}
                    <hr />
                    <RoutesComponent/>
                </div>
            </Router>            
            </MuiThemeProvider>
            </div>
        )
    }
};


const mapStateToProps = (state) =>{
    return{
        opening_state: state.AppReducers.opening_state,
        signing_in: state.AppReducers.signing_in,
        popover_open_state: state.AppReducers.popover_open_state,
        open_props: state.AppReducers.open_props,
        roleUser: state.RoleReducers.role
    }
};


export default connect(mapStateToProps)(App);
