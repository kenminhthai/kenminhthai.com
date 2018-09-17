import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";
import NotFound from "./views/NotFound";

import Header from "./components/Ui.Header";

import logo from "../logo.svg";
import "./App.scss";
import ProjectDetails from "./views/ProjectDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/works" component={Projects} />
            <Route path="works/:project-name" component={ProjectDetails} />
            <Route path="/not-found" component={NotFound} />
            <Route exact path="/" render={() => <Home />} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
