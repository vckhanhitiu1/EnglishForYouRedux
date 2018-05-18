import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import TeacherRegistrationInformationComponent from "./components/TeacherRegistrationInformationPage";
import CandidateRegistrationInformationComponent from "./components/CandidateRegistrationInformationPage";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ChoosingRoleComponent from "./components/ChoosingRoleComponent";
import {Drawer, IconButton, FontIcon, FlatButton, Popover, Menu, MenuItem} from 'material-ui'
import FooterComponent from "./components/FooterComponent";
import IELTSFilterScoreInformationComponent from "./components/IELTSFilterScoreInformationComponent";
import BasicStepsForTeacherRegistrationComponent from "./components/StepsTeacherRegistrationComponent/BasicStepsForTeacherRegistrationComponent";
import RoutesComponent from "./components/RoutesComponent";
import  "./styles/AppStyle.css"
import SignUpFormComponent from "./components/SignUpFormComponent";


class App extends Component {

    constructor(props){
        super(props)
        this.state ={
            opening_state: false,
            signing_in:false,
            popover_open_state: false
        }
    }

    render_nav_menus(){
        //TODO: Implement the navbar when user already logged in
    }

    /*
        Handle toggle of left navbar
     */
    handle_toggle_leftnav = () => this.setState({
        opening_state: !this.state.opening_state
    });

    handle_leftnav_change = (open) => this.setState({
        opening_state: open
    });

    handleClickPopOver= (event) =>

        this.setState({
            popover_open_state:true,
            anchorEl: event.currentTarget
        });

    handleClosePopOver = () =>
        this.setState({
            popover_open_state: false,
        });


    render() {
        return (
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
                                           open={this.state.popover_open_state}
                                           anchorEl={this.state.anchorEl}
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
                            open={this.state.opening_state}
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
                    <CandidateRegistrationInformationComponent/>
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



export default App;
