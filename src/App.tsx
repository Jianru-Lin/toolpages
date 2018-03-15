import * as React from 'react';
import { MyIP } from './pages/myip';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ToolsPage</h1>
        </header>
        <MyIP/>
      </div>
    );
  }
}

export default App;
