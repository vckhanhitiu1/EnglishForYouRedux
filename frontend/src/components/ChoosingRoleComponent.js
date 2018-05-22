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

            <div className="wrapper">
                <div class="card">

                </div>
                <Router>
                    <div>
                    <Link to ="/teachers">Teacher</Link>
                    <Link to ="/candidates">Candidate</Link>
                        <RoutesComponent/>
                    <Router/>
                    </div>
                </Router>

            </div>
        )
    }
}
export default ChoosingRoleComponent;