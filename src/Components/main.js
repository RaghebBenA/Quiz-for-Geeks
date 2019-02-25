import React, { Component } from 'react'
import Header from './header';
import Home from './Home';

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    )
  }
}

export default Main