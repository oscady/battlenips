import styled from 'styled-components';

export const PanelItemStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: "rgba(050,050,050,0.5)";
  height: 80%;
  margin: 5px auto;

  h2 {
    color: #e2e2e2;
    opacity: 0.8;
    font-size: 18px;
    white-space: nowrap;
    margin-bottom: 5px;
    @media(max-width:900px) {
      font-size: 4vw
    }
  }
`;