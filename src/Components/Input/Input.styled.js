import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 60%;
  position: relative;
  overflow: hidden;
  display: block;
  border: 2px solid gray;
    color: gray;
    background-color: white;
    padding: 2px 10px;
    border-radius: 8px;
    font-size: 20px;
    font-weight: bold;
    width: 120px;
    -webkit-input-placeholder: ${props => props.placeholder}
    
    `;