import React, { Compoonent } from 'react';
import { ImageButtonStyled } from './ImageButton.styled';

const ImageButton = (props) => {
  return (
    <ImageButtonStyled>
      <button onClick={ () => props.setOpen(!props.open) }>select image</button>
      <input onChange={ props.handleChange } type="file" name={ props.name } />
    </ImageButtonStyled>
  );
};

export default ImageButton;