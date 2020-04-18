import React from 'react';
import { ButtonStyled } from './Button.styled';

const Button = (props) => {
  return (
    <ButtonStyled { ...props }>
      <button onClick={ props.click }>
        { props.label }
      </button>
    </ButtonStyled>
  );
};

export default Button;
