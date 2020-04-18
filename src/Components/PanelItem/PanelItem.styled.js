import styled from 'styled-components';

export const PanelItemStyled = styled.div`
  width: 30%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: "rgba(050,050,050,0.5)";
  height: 80%;
  width: auto;
  margin: 5px auto;
  flex-grow: 1;

  h2 {
    color: #e2e2e2;
    opacity: 0.8;
    font-size: 12px;
    white-space: nowrap;
  }
`;