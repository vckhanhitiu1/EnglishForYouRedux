import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/scss/TeacherRegistrationStyle.css';
import {post} from 'axios';

export class FileUploadComponent extends Component {
    state = {
        dataSource: [],
    };

    constructor(props) {
        super(props);
        this.state = {
            file: []
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.fileUpload(this.state.file).then((response) => {
            console.log(response.data);
        })
    }

    onChange(e) {
        this.setState({file:e.target.files[0]})
    }

    fileUpload(file) {
        /*const url ='http://localhost:8081/api/addFile';
        const formData = new formData();
        formData.append('file', file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config)*/
    }

    componentDidMount() {
        console.log("");
    }

    render() {
        const file = this.state.file;
        return(
            <div className="wrapper-upload-file">
                <div className="file-upload-content">
                    <form onSubmit={this.onFormSubmit}>
                        <h1>File Upload</h1>
                        <input type="file"  onChange={this.onChange}/>
                        <button type="submit" onClick={this.fileUpload}>Upload</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default FileUploadComponent;