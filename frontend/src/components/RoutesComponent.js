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

/*const RoutesComponent = () => (
    <Switch>
        <Route exact path="/" component={TeacherRegistrationInformationComponent}/>
        <Route exact path="/" component={CandidateRegistrationInformationComponent}/>
    </Switch>
)*/

class RoutesComponent extends Component{
    render(){
        return(
                <Switch>
                    <Route exact path='/candidates' component={CandidateRegistrationInformationComponent}/>
                    <Route exact path='/teachers' component={TeacherRegistrationInformationComponent} />
                    <Route exact path='/demos' component={BasicStepsForTeacherRegistrationComponent} />
                    <Route exact path='/demosGrade' component={IELTSFilterScoreInformationComponent} />
                    <Route exact path='/login' component={LogInComponent} />
                    <Route exact path='/registration' component={SignUpFormComponent}/>
                    <Route exact path='/' component={HomePageComponent} />
                    <Route exact path ='/role' component={ChoosingRoleComponent}/>
                </Switch>
        )
    }
}
export default RoutesComponent
