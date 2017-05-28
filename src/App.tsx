import * as React from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';

// const logo = require('./logo.svg');

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="App">
        <AppBar
          title="Snoo's Shelf"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <div className="contentWrapper">
          <div className="sidebar" />
          <div className="central" />
          <div className="sidebar" />
        </div>
      </div>
    );
  }
}

export default App;