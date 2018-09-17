import React, { Component } from "react";
import NavBar from "../mod.navBar";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav>
        <ul>
          {this.props.links.map(link => (
            <NavBar
              key={link.name}
              link={link.link}
              exact={link.exact}
              name={link.name}
            />
          ))}
        </ul>
      </nav>
    );
  }
}

export default Menu;
