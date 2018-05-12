import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';


class RegistrationMainPageComponent extends Component{
    render(){
        return(
            <div>
                <RaisedButton
                    label="Choose an Image"
                    labelPosition="before"></RaisedButton>
            </div>
        )
    }
}

export default RegistrationMainPageComponent;