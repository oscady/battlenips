import React from 'react';
import ImageButton from './ImageButton';
import { ButtonComponentStyled } from './ButtonComponent.styled';
import Button from './Button';

const ButtonComponent = (props) => {
  return (
    <ButtonComponentStyled>
      <ImageButton name="imageSelect" handleChange={ props.handleChange } />
      <Button click={ props.toggleInfo } label="info" />
      <Button click={ props.takeSnapshot } label="save images" />
    </ButtonComponentStyled>
  );
};

export default ButtonComponent;