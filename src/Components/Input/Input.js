import React from 'react';
import { StyledInput } from './Input.styled';
import styled from 'styled-components';

const Container = styled.div`
  width: 32%;
  height: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: "rgba(050,050,050,0.5)";
  height: 100%;
  width: auto;
  margin: 5px auto;
  flex-grow: 1;
  white-space: nowrap;
  color: #e2e2e2
`;

const Input = (props) => {
  return (
    <Container>
      <h3 style={ { margin: "0" } }>canvas height</h3>
      <StyledInput name="imageHeight" onChange={ props.handleChange } value={ props.imageHeight } placeholder="height" type="number" label="height" />
      <h3 style={ { margin: "0" } }>canvas width</h3>
      <StyledInput name="imageWidth" onChange={ props.handleChange } value={ props.imageWidth } placeholder="width" type="number" label="width" />
    </Container>
  );
};

export default Input;