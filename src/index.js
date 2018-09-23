import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import CreateBrowserHistory from "history/createBrowserHistory";
import BackToTop from "../src/App/components/atm.BackToTop";

import App from "./App/App";
import registerServiceWorker from "./registerServiceWorker";

const history = CreateBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={history}>
    <BackToTop>
      <App />
    </BackToTop>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
