import React, { Component } from 'react';
import LeftPanel from './components/panels/leftPanel';
import MainPanel from './components/panels/mainPanel';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftPanel />
        <MainPanel />
      </div>
    );
  }
}

export default App;
