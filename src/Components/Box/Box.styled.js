import styled from 'styled-components';

export const BoxStyled = styled.div`
 width: 100%;
 height: 10%;
 margin: 0;
 padding: 0;
 display: flex;
 flex-direction: row;

 span {
   width: 100%;
   height: 100%;
   border: 1px solid black;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: transparent;
   color: black;
   font-size: ${props => props.fontSize};
 }
`;