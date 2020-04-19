import styled from "styled-components";

export const StyledTitle = styled.h3`
  display: flex;
  font-size: 2rem;
  height: 10%;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  align-self: flex-start !important;
  margin: 0 auto;
  position: absolute;
  top:0;
  left:15px;
  color: #e2e2e2;
  z-index: 11;

  @media (max-width: 900px) {
    width: 200px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    padding: 0px;
    z-index: 11;
  }
`;
