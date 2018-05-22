import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import "../styles/scss/ChoosingRoleStyle.css";
import FooterComponent from "./FooterComponent";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import RoutesComponent from "./RoutesComponent";

class ChoosingRoleComponent extends Component{
    render(){
        return(
<Router>
            <div className="wrapper">
                <div class="card">
                <MuiThemeProvider>
                    <h1>Choose Your Role</h1>
                    <RaisedButton
                        labelPosition="before"
                        primary={true}>
                        <Link to ="/teachers">Teacher Registration</Link>
                    </RaisedButton>
                    <RaisedButton
                        labelPosition="before"
                        primary={true}>
                        <Link to ="/candidates">Candidate Registration</Link>
                    </RaisedButton>

                </MuiThemeProvider>

                </div>
                    <div>
                    <RoutesComponent/>
                    </div>

            </div>
</Router>

        )
    }
}
export default ChoosingRoleComponent;