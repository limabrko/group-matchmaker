import React from 'react';
import ReactDOM from 'react-dom';

import GroupMatchmaker from './components/GroupMatchmaker';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Group Matchmaker</h1>
        <GroupMatchmaker />
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
