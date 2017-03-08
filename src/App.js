import React, { Component } from 'react';
import TabContent from './components/TabContent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrap">

          <div className="header--nav">
            <TabContent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
