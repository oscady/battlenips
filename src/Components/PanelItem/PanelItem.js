import React, { Component } from 'react';
import { PanelItemStyled } from './PanelItem.styled';
import Slider from '../Slider/Slider';

class PanelItem extends Component {
  render() {
    return (
      <PanelItemStyled>
        <h2>{ this.props.title }</h2>
        <Slider
          name={ this.props.name }
          value={ this.props.value }
          handleChange={ this.props.handleChange }
          min={ this.props.min }
          max={ this.props.max } />
        <p>{ this.props.value }</p>
      </PanelItemStyled>
    );
  }
}

export default PanelItem;