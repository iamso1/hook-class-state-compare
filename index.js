import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Hi from './Hi';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello />
        <hr/>
        <Hi/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
