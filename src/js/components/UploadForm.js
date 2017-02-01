import React from 'react';

class UploadForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = result => {                        
            let contents = result.target.result;
            console.log(contents);
        }   
        
        reader.readAsText(file);        
    }

    showFileContent() {
        this.state
    }

    render() {
        return (
            <form className="upload-form" action="" formMethod="post" formEncType="multipart/form-data">
                <label className="upload-form__label" id="upload-form-label">
                    <input 
                        className="upload-form__input" 
                        type="file"                         
                        value={this.state.value}
                        onChange={this.handleChange} 
                    />
                </label>
            </form>
        );
    }
}

export default UploadForm;