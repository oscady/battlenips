import styled from 'styled-components';

export const ButtonComponentStyled = styled.div`
  width: 30%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: "rgba(050,050,050,0.5)";
  height: 100%;
  width: auto;
  margin: 0 auto;
  flex-grow: 1;
  position: absolute;
  z-index: 40;

  @media(max-width: 900px) {
    flex-direction: column;
 
    justify-content: center;
  }
`;