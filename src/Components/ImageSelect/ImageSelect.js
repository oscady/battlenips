import React, { Component } from 'react';

class ImageSelect extends Component {
  render() {
    return (
      <input
        name="imageSelect"
        type="file"
        onChange={ this.props.handleChange }
        background={ this.props.background } />
    );
  }
}
export default ImageSelect;