import React from 'react';

const Slider = (props) => {
  return (
    <input
      name={ props.name }
      type="range"
      className="slider"
      step={ props.opacity ? "0.1" : "1" }
      min={ props.min }
      max={ props.max }
      value={ props.value }
      onChange={ props.handleChange }
      style={ { marginBottom: "5px" } }
    />
  );
};

export default Slider;