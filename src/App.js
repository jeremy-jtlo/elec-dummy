import React, { Component } from 'react';
import LibraryView from './components/panels/libraryView';
import QueueView from './components/panels/queueView';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './styles/App.css';
import './styles/grid.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="flex-container">
          <LibraryView />
          <QueueView />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
