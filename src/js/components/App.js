import React from 'react';

import Header from './Header';
import UploadForm from './UploadForm';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <UploadForm/>
            </div>
        );
    }
}

export default App;