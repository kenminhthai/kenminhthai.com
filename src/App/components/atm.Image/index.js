import React from "react";
import ProgressiveImage from "react-progressive-image";
import PropTypes from "prop-types";

function Img(props) {
  return (
    <ProgressiveImage delay={1250} placeholder={props.pre} src={props.src}>
      {(image, loading) => (
        <img
          src={image}
          width={props.width}
          alt={props.alt}
          style={{ opacity: loading ? 0.3 : 1 }}
        />
      )}
    </ProgressiveImage>
  );
}

Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  pre: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default Img;
