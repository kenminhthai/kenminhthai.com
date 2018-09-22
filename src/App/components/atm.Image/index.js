import React from "react";
import PropTypes from "prop-types";

function Img(props) {
  return <img src={props.src} alt={props.alt} width={props.width} />;
}

Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string
};

export default Img;
