import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function Links(props) {
  return (
    <NavLink to={props.link} exact={props.exact} activeClassName="active">
      {props.name}
    </NavLink>
  );
}

Links.propTypes = {
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  children: PropTypes.string
};

Links.defaultProps = {
  to: "/",
  exact: true,
  children: "Home"
};

export default Links;
