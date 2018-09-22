import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loadable from "react-loadable";
import ReactGA from "react-ga";
import asyncComponent from "./utils/asyncComponent";

import { ProjectList } from "../App/utils";

// Load Base Style
import "./App.scss";

if (process.env.NODE_ENV === "production") {
  ReactGA.initialize("UA-71656211-8");
}

const Home = asyncComponent(() =>
  import("./views/Home").then(module => module.default)
);

const About = asyncComponent(() =>
  import("./views/About").then(module => module.default)
);

const Projects = asyncComponent(() =>
  import("./views/Projects").then(module => module.default)
);

const ProjectDetails = asyncComponent(() =>
  import("./views/ProjectDetails").then(module => module.default)
);

const NotFound = asyncComponent(() =>
  import("./views/NotFound").then(module => module.default)
);

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location } = this.props;
    // const currentkey = location.key;
    const timeout = { enter: 500, exit: 500 };
    return (
      <Switch location={location}>
        <Route path="/about" render={props => <About {...props} />} />
        <Route
          exact
          path="/works/:projectname"
          render={props => <ProjectDetails data={ProjectList} {...props} />}
        />
        <Route
          path="/works"
          render={props => <Projects data={ProjectList} {...props} />}
        />
        <Route path="/not-found" component={NotFound} />
        <Route exact path="/" render={() => <Home />} />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}

export default App;
