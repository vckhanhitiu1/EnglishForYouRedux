import React, { Component } from 'react';
import { Card, CardText, TextField, RaisedButton} from 'material-ui';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

class LogInComponent extends Component{
    render(){
        return(
          <div>
              <Card>
                  <h1>Log In Page</h1>
                  <div className="field-line">
                      <TextField
                          floatingLabelText="Email"
                          name="email"
                      />
                  </div>

                  <div className="field-line">
                      <TextField
                          floatingLabelText="Password"
                          type="password"
                          name="password"
                      />
                  </div>

                  <FacebookLogin
                      appId="122717688592283"

                  />
                  <br/><br/>

                  <GoogleLogin
                      buttonText="Login with Google"
                  />

                  <div className="button-line">
                      <RaisedButton type="submit" label="Log in" primary />
                  </div>

                  <CardText>Don't have an account? <Link to={'/registration'}>Create one</Link>.</CardText>

              </Card>
          </div>
        );
    }
}
export default LogInComponent