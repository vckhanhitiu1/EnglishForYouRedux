import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import React, { Component } from 'react';
import ChoosingRoleComponent from "./ChoosingRoleComponent";
import CandidateRegistrationInformationComponent from "./CandidateRegistrationInformationPage"
import TeacherRegistrationInformationComponent from "./TeacherRegistrationInformationPage";
import BasicStepsForTeacherRegistrationComponent from "./StepsTeacherRegistrationComponent/BasicStepsForTeacherRegistrationComponent";
import IELTSFilterScoreInformationComponent from "./IELTSFilterScoreInformationComponent";
import LogInComponent from "./LogInComponent";
import HomePageComponent from "./HomePageComponent";
import SignUpFormComponent from "./SignUpFormComponent";

class RoutesComponent extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={HomePageComponent} />
                    <Route exact path='/teachers' component={TeacherRegistrationInformationComponent} />
                    <Route exact path='/demos' component={BasicStepsForTeacherRegistrationComponent} />
                    <Route exact path='/demosGrade' component={IELTSFilterScoreInformationComponent} />
                    <Route exact path='/login' component={LogInComponent} />
                    <Route exact path='/registration' component={SignUpFormComponent}/>
                    <Route exact path='/candidates' component={CandidateRegistrationInformationComponent}/>
                </Switch>
            </div>
        )
    }
}
export default RoutesComponent
