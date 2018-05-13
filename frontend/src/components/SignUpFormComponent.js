import React, { Component } from 'react';
import { Card, CardText, TextField, RaisedButton} from 'material-ui';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


class SignUpFormComponent extends Component{
    render(){
        return(
              <Card>
                  <form>
                      <h2>Sign Up Form</h2>

                      <div className="field-line">
                          <TextField
                              floatingLabelText="Name"
                              name="name"
                          />
                      </div>

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

                      <div className="button-line">
                          <RaisedButton type="submit" label="Create New Account" primary />
                      </div>

                      <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>

                  </form>
              </Card>
        );
    }
}
export default SignUpFormComponent