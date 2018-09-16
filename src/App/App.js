import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";
import NavBar from "./components/Ui.navBar/navbar";
import NotFound from "./views/NotFound";

import logo from "../logo.svg";
import "./App.scss";
import ProjectDetails from "./views/ProjectDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
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
