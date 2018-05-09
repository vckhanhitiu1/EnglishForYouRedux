import React, { Component } from 'react';
import {Hello_component} from './containers/HelloWorld';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello_component/>
      </div>
    );
  }
}

export default App;
