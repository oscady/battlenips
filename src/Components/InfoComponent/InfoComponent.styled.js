import styled from 'styled-components';

export const InfoComponentStyled = styled.div`
  width: 90%;
  height: 90%;
  padding: 50px;
  border: 5px solid blueviolet;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #E5D0D0;

  h2 {
    padding: 20px;
    text-align: center;
    margin: 0 auto;
  }

  span {
    font-size: 18px;
    font-weight: bold;
  }
  p {
    font-size: 18px;
    color: black;
    letter-spacing: 1.7px;
    text-align: left;
  }
`;