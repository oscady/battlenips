import React, { Component, Fragment } from 'react';
import Image from '../Image/Image';
import InfoComponent from '../InfoComponent/InfoComponent';
import { MainSectionStyled } from '../MainSection/MainSection.styled';
import styled from 'styled-components';

const ResponsiveDiv = styled.div`
  max-width: 100vw;
  max-height: 70vh;
  height: auto;
  width: 90%;
  :after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;
class MainSection extends Component {

  render() {
    return (
      <MainSectionStyled>
        { this.props.modal ? <InfoComponent toggleModal={ this.props.toggleModal } /> :
          <Image
            name="imageSelect"
            landscape={ this.props.landscape }
            opacity={ this.props.opacity }
            fontSize={ this.props.fontValue }
            background={ this.props.background }
            backgroundHeight={ this.props.backgroundHeight }
            backgroundWidth={ this.props.backgroundWidth }
            backgroundX={ this.props.backgroundX }
            backgroundY={ this.props.backgroundY }
            imageScale={ this.props.imageScale }
            imageHeight={ this.props.imageHeight }
            imageWidth={ this.props.imageWidth }
          />
        }
      </MainSectionStyled>
    );
  }
}

export default MainSection;