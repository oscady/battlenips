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

  @media(max-width: 900px) {
    padding:15px;
  }

  div {
    height: auto;
    align-items: flex-start;
  justify-content: center;
  background-color: #E5D0D0;
  overflow:scroll;
  ::-webkit-scrollbar {
    display: none;
}
  }

  h1 {
    float:left;
    padding: 10px;
    position: fixed;
    background-color: rgba(0,0,0,0.5);
    cursor: pointer;
  }

  h2 {
    padding: 20px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    color: black;
    letter-spacing: 1.7px;
    line-height: 1.6;
    text-align: left;
    margin-bottom: 10px;

    @media(max-width: 900px) {
      font-size: 14px;
    }
  }
`;