import React, { Component } from 'react';
import { ControlPanelStyled } from './ControlPanel.styled';
import PanelItem from '../PanelItem/PanelItem';
import ImageSelect from '../ImageSelect/ImageSelect';
import Input from '../Input/Input';
import ButtonComponent from '../Buttons/ButtonComponent';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 32%;
    flex-direction: row;

  @media(max-width:900px) {
    flex-direction: column;
  }
`;
class ControlPanel extends Component {

  render() {
    return (
      <ControlPanelStyled>
        <Container>
          <PanelItem
            title="box opacity"
            name="opacitySlider"
            min={ this.props.minOpacity }
            max={ this.props.maxOpacity }
            value={ this.props.opacityValue }
            handleChange={ this.props.handleChange }>
          </PanelItem>
          <PanelItem
            title="image scale"
            name="imageScale"
            min={ 50 }
            max={ 150 }
            value={ this.props.imageScale }
            handleChange={ this.props.handleChange }>
          </PanelItem>
        </Container>
        <Container>
          <PanelItem
            title="image x"
            name="backgroundX"
            min={ 0 }
            max={ 150 }
            value={ this.props.backgroundX }
            handleChange={ this.props.handleChange }>
          </PanelItem>
          <PanelItem
            title="image y"
            name="backgroundY"
            min={ 0 }
            max={ 150 }
            value={ this.props.backgroundY }
            handleChange={ this.props.handleChange }>
          </PanelItem>
        </Container>
        <Container>
          <PanelItem
            title="canvas height"
            name="backgroundHeight"
            min={ 200 }
            max={ 1000 }
            value={ this.props.backgroundHeight }
            handleChange={ this.props.handleChange }>
          </PanelItem>
          <PanelItem
            title="canvas width"
            name="backgroundWidth"
            min={ 200 }
            max={ 1000 }
            value={ this.props.backgroundWidth }
            handleChange={ this.props.handleChange }>
          </PanelItem>
        </Container>
        {/* <Input imageHeight={ this.props.imageHeight } imageWidth={ this.props.imageWidth } handleChange={ this.props.handleChange } /> */ }
      </ControlPanelStyled>
    );
  }
}

export default ControlPanel;