import React, { Component } from 'react';
import { ImagePanelStyled } from './ImagePanel.styled';
import Slider from '../Slider/Slider';

class PanelItem extends Component {
  render() {
    return (
      <PanelItemStyled>
        <h2>{ this.props.title }</h2>
        <Slider value={ this.props.value } name="imageX" handleChange={ this.props.handleChange } min={ this.props.min } max={ this.props.max } />
        <Slider value={ this.props.value } name="imageY" handleChange={ this.props.handleChange } min={ this.props.min } max={ this.props.max } />
        <Slider value={ this.props.value } name="imageScale" handleChange={ this.props.handleChange } min={ this.props.min } max={ this.props.max } />
        <h2>{ this.props.value }</h2>
      </PanelItemStyled>
    );
  }
}

export default PanelItem;