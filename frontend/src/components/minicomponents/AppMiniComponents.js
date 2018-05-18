/**
 * @MiniComponents
 * @param props
 * @returns {*}
 */

// #Import core
import React from 'react';

// #Import resource
import {FlatButton, Popover, Menu, MenuItem} from 'material-ui';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export const CustomRouter = (props) => {
    const { open, onRequestClose, anchorEl , click} = props;
    return (
        <Router>
        <div>
            <FlatButton label="Log In" onClick={click}/>
            <Popover open={open}
                     anchorEl={anchorEl}
                     anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                     targetOrigin={{horizontal: 'left', vertical: 'top'}}
                     onRequestClose={onRequestClose}>
                <Menu>
                    <MenuItem><Link to="/login">Log In</Link></MenuItem>
                    <MenuItem><Link to="/registration">Registration Here!</Link></MenuItem>
                </Menu>
            </Popover>
        </div>
        </Router>
    );
};

