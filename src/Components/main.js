import React, { Component } from 'react'
import Header from './header';
import Home from './Home';
import CsGame from "./CsGames"
import Login from "./Login"
import { Switch, Route, Redirect } from "react-router-dom"

class Main extends Component {
  render() {
    const HomePage = () => {
      return (
        <Home />
      )
    }
    return (
      <div>
        <Header />
        <Switch>
        <Route path='/home' component={HomePage} />
        <Route exact path='/Cs' component={() =>  <CsGame />} />
        <Route path="/login" component={Login} />
        <Redirect to="/home" />
        </Switch>
      </div>
    )
  }
}

export default Main