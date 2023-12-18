import React from 'react';
import ReactDOM from 'react-dom'; // helps connect react application to public index.html
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root')); // render all of the components inside App and then put it into the index.html file under the root tag
