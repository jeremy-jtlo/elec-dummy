import React, { Component } from 'react';
import LeftPanel from './components/panels/leftPanel';
import MainPanel from './components/panels/mainPanel';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <LeftPanel />
        <MainPanel />
      </MuiThemeProvider>
    );
  }
}

export default App;
