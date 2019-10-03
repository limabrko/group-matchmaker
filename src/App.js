import React from "react";
import ReactDOM from "react-dom";

import GroupMatchmaker from './components/GroupMatchmaker';
import 'normalize.css';
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <h1>Group Matchmaker</h1>
      <GroupMatchmaker />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
