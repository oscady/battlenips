import styled from 'styled-components';

export const ImageButtonStyled = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;

  button {
    border: 2px solid gray;
    color: gray;
    background-color: white;
    padding: 8px 20px;
    border-radius: 8px;
    font-size: 20px;
    font-weight: bold;
    width: 180px;
  }

  input {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }
`;