import React from 'react';
import ImageButton from './ImageButton';
import { ButtonComponentStyled } from './ButtonComponent.styled';
import Button from './Button';

const ButtonComponent = (props, open, setOpen) => {
  return (
    <ButtonComponentStyled>
      <ImageButton name="imageSelect" handleChange={ props.handleChange } open={ open } setOpen={ setOpen } />
      <Button click={ props.toggleInfo } label="info" onClick={ props.toggleMenu } />
      <Button click={ props.takeSnapshot } label="save images" onClick={ props.toggleMenu } />
    </ButtonComponentStyled>
  );
};

export default ButtonComponent;