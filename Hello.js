import React, { Component } from 'react';

class Hello extends Component {
  state = {
    count: 0
  }

  addCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  showCount = () => {
    setTimeout(() => {
      alert(this.state.count);
    }, 5000);
  }


 showCountClosure = () => {
   const count=this.state.count;
    setTimeout(() => {
      alert(count);
    }, 5000);
  }


  render() {
    return (
      <div>
        <div>class version:</div>
        count: {this.state.count}
        <button onClick={this.addCount}>add</button>
        <button onClick={this.showCount}>alert</button>
        <br />
        <br />
        <div>class closure version:</div>
        count: {this.state.count}
        <button onClick={this.addCount}>add</button>
        <button onClick={this.showCountClosure}>alert</button>
      </div>
    );
  }
}

export default Hello;