import React, { Compoonent } from 'react';
import { ImageButtonStyled } from './ImageButton.styled';

const ImageButton = (props, open, setOpen) => {
  return (
    <ImageButtonStyled>
      <button onClick={ () => setOpen(!open) }>select image</button>
      <input onChange={ props.handleChange } type="file" name={ props.name } />
    </ImageButtonStyled>
  );
};

export default ImageButton;