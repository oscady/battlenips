import React from 'react';

const Slider = (props) => {
  return (
    <input
      name={ props.name }
      type="range"
      className="slider"
      min={ props.min }
      max={ props.max }
      value={ props.value }
      onChange={ props.handleChange }
    />
  );
};

export default Slider;