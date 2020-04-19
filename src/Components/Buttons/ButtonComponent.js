import React from 'react';
import ImageButton from './ImageButton';
import { ButtonComponentStyled } from './ButtonComponent.styled';
import Button from './Button';

const ButtonComponent = (props, open) => {
  return (
    <ButtonComponentStyled>
      <ImageButton name="imageSelect" handleChange={ props.handleChange } open={ props.open } setOpen={ props.setOpen } />
      <Button click={ props.toggleInfo } label="info" onClick={ () => props.setOpen(!open) } />
      <Button click={ props.takeSnapshot } label="save images" onClick={ () => props.setOpen(!open) } />
    </ButtonComponentStyled>
  );
};

export default ButtonComponent;