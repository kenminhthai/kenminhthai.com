import React, { Component } from "react";
import { Intro } from "./intro";
import { selfIntro } from "../../utils";
import { TxtBg } from "../../components/atm.TxtBg";

class Home extends Component {
  state = {};
  render() {
    return (
      <main>
        <Intro content={selfIntro} />
        <TxtBg text="Ken" />
      </main>
    );
  }
}

export default Home;
