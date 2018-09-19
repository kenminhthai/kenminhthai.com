import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Transition } from "react-transition-group/Transition";
import ReactGA from "react-ga";
import { TweenLite } from "gsap";

import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";
import NotFound from "./views/NotFound";
import { ProjectList } from "../App/utils";

import "./App.scss";
import ProjectDetails from "./views/ProjectDetails";

//Activate this later

if (process.env.NODE_ENV === "production") {
  ReactGA.initialize("UA-71656211-8");
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location } = this.props;
    // const currentkey = location.key;
    const timeout = { enter: 500, exit: 500 };
    return (
      <div className="App">
        <Switch>
          <Route path="/about" component={About} />
          <Route
            path="/works"
            render={props => <Projects data={ProjectList} />}
          />
          <Route path="/works/:project-name" component={ProjectDetails} />
          <Route path="/not-found" component={NotFound} />
          <Route exact path="/" render={() => <Home />} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
