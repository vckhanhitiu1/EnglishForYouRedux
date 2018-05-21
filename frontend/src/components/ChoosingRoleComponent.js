import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import "../styles/scss/ChoosingRoleStyle.css";
import FooterComponent from "./FooterComponent";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import RoutesComponent from "./RoutesComponent";

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
    render(){
        return(
            <div className="wrapper">
                <div class="card">
                <MuiThemeProvider>
                    <h1>Choose Your Role</h1>
                    <RaisedButton
                        label="Teacher Registration"
                        labelPosition="before"
                        primary={true}
                        onClick={<Link to ="/teachers"></Link>}
                    />

                    <RaisedButton
                        label="Candidate Registration"
                        labelPosition="before"
                        primary={true}
                        onClick={<Link to ="/candidates"></Link>}
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
}
export default ChoosingRoleComponent;