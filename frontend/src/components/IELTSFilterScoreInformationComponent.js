import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Upload, message, Button, Icon } from 'antd';
import '../styles/scss/IELTSFilterScoreInformationStyle.css';
import DatePicker from 'material-ui/DatePicker';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import RoutesComponent from "./RoutesComponent";
import axios from 'axios';

const props = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

/*class IELTSFilterScoreInformationComponent extends Component{
    state = {
        dataSource: [],
    };

    constructor() {
        super();

        this.state = {
            writing: null,
            listening: null,
            reading: null,
            speaking: null,
            date: null
        }
    }

    componentDidMount() {
        console.log("");
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {writing, listening, reading, speaking, date} = this.state;

        axios.post('http://localhost:8081/api/addScore', {writing, listening, reading, speaking, date})
            .then((result) => {
                this.props.history.push("/")
            });
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    render(){
        const writing = this.state.writing;
        const listening = this.state.listening;
        const reading = this.state.reading;
        const speaking = this.state.speaking;
        const date = this.state.date;

        return(
            <div className="wrapper-ielts-filter">
                <div className="ielts-filter-content">
                    <h2>Enter Your Ielts Result</h2>
                    <h3>Your Overall Bandscores</h3>

                    <div className="writing-score" id="writing-score">
                        <label>Writing: </label>
                        <TextField
                            hintText="Writing Score" name="writing"  value={writing} onChange={this.onChange}
                        /><br />
                    </div>

                    <div className="listening-score" id="listening-score-score">
                        <label>Listening: </label>
                        <TextField
                            hintText="Listening Score" name="listening"  value={listening} onChange={this.onChange}
                        /><br />
                    </div>

                    <div className="reading-score" id="reading-score">
                        <label>Reading: </label>
                        <TextField
                            hintText="Reading Score" name="reading"  value={reading} onChange={this.onChange}
                        /><br />
                    </div>

                    <div className="speaking-score" id="speaking-score">
                        <label>Speaking: </label>
                        <TextField
                            hintText="Speaking Score" name="speaking"  value={speaking} onChange={this.onChange}
                        /><br />
                    </div>

                    <div className="valid-to" id="valid-to">
                        <label>Valid to: </label>
                        <DatePicker className="date-picker" value={date} onChange={this.onChange}
                        />
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
                    <Router>
                        <RoutesComponent/>
                    </Router>
            </div>
        );
    }
}*/

class IELTSFilterScoreInformationComponent extends Component{

    render(){
        return(
          <div className="wrapper-ielts-filter">
              <div className="ielts-filter-content">
              <h2>Enter Your Ielts Result</h2>
              <h3>Your Overall Bandscores</h3>

              <div className="writing-score" id="writing-score">
                  <label>Writing: </label>
                  <TextField
                      hintText="Writing Score"
                  /><br />
              </div>

              <div className="listening-score" id="listening-score-score">
                  <label>Listening: </label>
                  <TextField
                      hintText="Listening Score"
                  /><br />
              </div>

              <div className="reading-score" id="reading-score">
                  <label>Reading: </label>
                  <TextField
                      hintText="Reading Score"
                  /><br />
              </div>

              <div className="speaking-score" id="speaking-score">
                  <label>Speaking: </label>
                  <TextField
                      hintText="Speaking Score"
                  /><br />
              </div>

                  <div className="valid-to" id="valid-to">
                      <label>Valid to: </label>
                      <DatePicker className="date-picker"
                      />
                  </div>

              <div>
                  <Upload {...props}>
                      <Button>
                          <Icon type="upload" /> Click to Upload
                      </Button>
                  </Upload>

                  <RaisedButton

                      target="_blank"
                      label="Cancel"
                      secondary={true}

                  />
              </div>
              </div>
          </div>
        );
    }
}

export default IELTSFilterScoreInformationComponent;