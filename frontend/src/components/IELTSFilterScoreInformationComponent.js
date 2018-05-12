import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Upload, message, Button, Icon } from 'antd';
import '../styles/scss/IELTSFilterScoreInformationStyle.css';
import DatePicker from 'material-ui/DatePicker';

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
              </div>
              </div>
          </div>
        );
    }
}

export default IELTSFilterScoreInformationComponent;