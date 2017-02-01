import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
    render() {
        return (
          <div>
            <h1>rqlog test 123</h1>
            <form className="upload-form" action="" formMethod="post" formEncType="multipart/form-data">
              <label className="upload-form__label">
                <input className="upload-form__input" type="file" defaultValue="" name="log-file" />
              </label>
            </form>
          </div>
      );
    }
} 

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);