import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import TeacherRegistrationInformationComponent from "./components/TeacherRegistrationInformationPage";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ChoosingRoleComponent from "./components/ChoosingRoleComponent";
import {Drawer, IconButton, FontIcon, FlatButton, Popover, Menu, MenuItem} from 'material-ui';
import  "./styles/AppStyle.css"

import RoutesComponent from "./components/RoutesComponent";
import * as type from "./constants/AppConstants";
import {on_opening_state_action,on_get_state} from "./actions/AppActions";


class App extends Component {

    constructor(props){
        super(props)
        // this.state ={
        //     opening_state: false,
        //     signing_in:false,
        //     popover_open_state: false
        // }
    }

    render_nav_menus(){
        //TODO: Implement the navbar when user already logged in
    }

    /*
        Handle toggle of left navbar
     */

    handle_toggle_leftnav = () =>{
        this.props.dispatch(on_opening_state_action());

    }

    handle_leftnav_change = () => {
        console.log("lon lon"+this.props.open);
        this.props.dispatch(on_get_state());
    };

    // handleClickPopOver=()=>{
    //     this.props.dispatch(opening_state);
    // };
    //
    // handleClosePopOver=()=>{
    //     this.props.dispatch(opening_state);
    // };

    render() {
        return (
            console.log("cac"+this.props.open),
            <div className="rootStyle">
            <MuiThemeProvider >
                <AppBar title="Title"
                        position="static"
                        zDepth={0}
                        onLeftIconButtonClick={this.handle_toggle_leftnav.bind(this)}
                        iconElementRight={
                            <Router>
                               <div>
                                   <FlatButton label="Log In" onClick={this.handleClickPopOver}/>
                                       <Popover
                                           open={this.props.popover_open_state}
                                           anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                                           targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                           onRequestClose={this.handleClosePopOver}
                                       >
                                       <Menu>
                                           <MenuItem><Link to="/login">Log In</Link></MenuItem>
                                           <MenuItem ><Link to="/registration">Registration Here!</Link></MenuItem>
                                       </Menu>
                                       </Popover>
                               </div>
                            </Router>
                        }>

                    <div className="top-bar-right">
                    </div>

                    <Drawer docked={false} width={300}
                            open={this.props.open}
                            onRequestChange={this.handle_leftnav_change.bind(this)}>
                        <AppBar
                            title="Menu"
                            zDepth={0}
                            iconElementLeft={
                                <FontIcon className="material-icons">
                                <i class="material-icons">&#xE317;</i>
                                </FontIcon>
                            }
                            onLeftIconButtonClick={this.handle_toggle_leftnav.bind(this)}
                        />
                    </Drawer>
                </AppBar>

                <main>
                    <a class="google-btn" href="/auth/google">Google+</a>
                </main>

            <Router>
                <div >
                    <Link to="/login">Log In</Link>
                    <Link to="/registration">Registration Here!</Link>
                    <TeacherRegistrationInformationComponent/>
                    <ChoosingRoleComponent/>
                    <hr />
                    <RoutesComponent/>
                </div>
            </Router>
            </MuiThemeProvider>
            </div>
        );
    }
}


const mapStateToProps = (state) =>{
    return{
        opening_state: state.AppReducers.opening_state,
        signing_in: state.AppReducers.signing_in,
        popover_open_state: state.AppReducers.popover_open_state,
        open: state.AppReducers.open,
    }
}


export default connect(mapStateToProps)(App);
