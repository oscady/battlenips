import styled from "styled-components";

export const StyledTitle = styled.h3`
  display: flex;
  font-size: 2rem;
  height: 100px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  align-self: flex-start !important;
  margin: 0 auto;
  position: absolute;
  left:0;
  right:0;
  color: #e2e2e2;
  z-index: 11;

  @media (min-width: 899px) {
    width: 200px;
    position: absolute;
    top: 0;
    left: 5px;
    padding: 0px;
    z-index: 11;
  }
`;
