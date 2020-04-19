import styled from "styled-components";

export const MenuStyled = styled.nav`
  display: flex;;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  background: black;
  height: 10vh;
  text-align: left;
  padding: 0rem;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  @media (max-width: 900px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    transform: ${({ open }) => (open ? "translateX(-0%)" : "translateY(0%)")};
    position: ${({ open }) => open ? "absolute" : "relative"};
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    padding: 0px;
    justify-content: center;
    align-items: center;
    background: black;
    z-index: 10;
  }

`;
