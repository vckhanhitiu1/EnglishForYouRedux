import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import "../styles/scss/ChoosingRoleStyle.css";
import FooterComponent from "./FooterComponent";

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
                    />
                    <RaisedButton

                        target="_blank"
                        label="Student Registration"
                        secondary={true}

                    />
                </MuiThemeProvider>

                </div>
                <FooterComponent/>
            </div>
        )
    }
}
export default ChoosingRoleComponent;