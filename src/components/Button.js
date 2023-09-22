// This is a reusable button component that takes three props: className, onClick, and label. It renders a button with these properties.

import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.label}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
};

export default Button;