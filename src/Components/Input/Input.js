import React from 'react';
import { StyledInput } from './Input.styled';
import styled from 'styled-components';

const Container = styled.div`
  width: 30%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: "rgba(050,050,050,0.5)";
  height: 100%;
  width: auto;
  margin: 5px auto;
  flex-grow: 1;
`;
const Input = (props) => {
  return (
    <Container>
      <h2 style={ { margin: "0" } }>canvas size</h2>
      <StyledInput name="imageHeight" onChange={ props.handleChange } value={ props.imageHeight } placeholder="height" type="number" label="height" />
      <StyledInput name="imageWidth" onChange={ props.handleChange } value={ props.imageWidth } placeholder="width" type="number" label="width" />
    </Container>
  );
};

export default Input;