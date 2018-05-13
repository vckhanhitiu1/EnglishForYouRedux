import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/scss/TeacherRegistrationStyle.css';
//import '../../styles/generalStyles/GeneralElementStyle.css';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

class TeacherRegistrationInformationComponent extends Component {
    state = {
        dataSource: [],
    };

    constructor(){
        super();

        this.state = {
            firstName: null,
            lastName: null,
            email: null
        }


    }

    componentDidMount(){
        console.log("");
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { firstName,lastName,email} = this.state;

        axios.post('http://localhost:8081/api/addUser', { firstName, lastName, email})
            .then((result) => {
                this.props.history.push("/")
            });
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }



    render() {
        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        const email = this.state.email;

        return (
            <div className="teacher-registration-wrapper">
                <h1>Registration Information</h1>

                <div className= "teacher-registration-content">
                    <div className="content-inside">
                        <div className="first-name" id="firstName">
                            <i class="fa fa-address-card" aria-hidden="true"/>

                            <TextField
                                hintText="First Name" name="firstName"  value={firstName} onChange={this.onChange}
                            /><br />
                        </div>

                        <div className="last-name" id="lastName">
                            <i class="fa fa-address-card" aria-hidden="true"/>
                            <TextField
                                hintText="Last Name"
                                name="lastName"
                                value={lastName} onChange={this.onChange}
                            />
                            <br />
                        </div>

                        <div className="email" id="email">
                            <i class="fa fa-envelope-o" aria-hidden="true"/>
                            <TextField
                                name="Email"
                                hintText="Email Address"
                                value={email} onChange={this.onChange}
                            />
                            <br/>
                        </div>

                        {/*<div className="gender" id="gender">
                            <i class="fa fa-transgender" aria-hidden="true"/>
                            <SelectField
                                floatingLabelText="I Am"
                            >
                                <MenuItem value={1} primaryText="Male" />
                                <MenuItem value={2} primaryText="Female" />

                            </SelectField>
                            <br/>
                        </div>

                        <div className="phone" id="phone">
                            <i class="fa fa-mobile" aria-hidden="true"/>
                            <TextField
                                hintText="Phone Number"
                            /><br />
                        </div>

                        <div className="birthday" id="birthday">
                            <i class="fa fa-birthday-cake" aria-hidden="true"/>
                            <DatePicker className="date-picker"
                                hintText="Birthday"
                            />
                        </div>

                        <div className="personal-description" id="personalDescription">
                            <i class="fa fa-sticky-note" aria-hidden="true"/>

                            <TextField
                                hintText="Personal Description"
                            /><br />
                        </div>
                        <div className="personal-id" id="personalId">
                            <i class="fa fa-address-card-o" aria-hidden="true"/>
                            <TextField
                                hintText="Personal ID"
                            /><br />
                        </div>


                        <div className="address" id="address">
                            <i class="fa fa-address-book-o" aria-hidden="true">

                                <AutoComplete
                                    hintText="Type anything"
                                    dataSource={this.state.dataSource}
                                    onUpdateInput={this.handleUpdateInput}
                                /></i>
                            <br />
                        </div>


                        <div className="profile-image" id="profileImage">
                            <i class="fa fa-file-image-o" aria-hidden="true"/>

                            <TextField
                                hintText="Image Profile"
                            /><br />
                        </div>*/}
                    </div>
                </div>
                <div className="logicButton">
                    <RaisedButton

                        target="_blank"
                        label="Submit"
                        secondary={false}
                        onClick={this.onSubmit}


                    />
                    <RaisedButton

                    target="_blank"
                    label="Cancel"
                    secondary={true}

                />
                </div>
            </div>
        )
    }


}
export default TeacherRegistrationInformationComponent;