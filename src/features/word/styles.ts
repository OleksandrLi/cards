import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 680px) {
    height: calc(100vh - 130px);
    display: flex;
    flex-direction: column;
  }
`;

export const WordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px 40px;
  margin: auto;
  max-width: 400px;
  background: #ffffff;
  border-color: #729eff;
  border-style: solid;
  border-width: 35px 5px 5px;

  div {
    margin: 10px 0;
  }

  @media (max-width: 680px) {
    width: 100%;
    box-sizing: border-box;
    margin-top: 10vh;
    padding: 60px 0 50px;
  }
`;

export const EnglishWord = styled.div`
  font-size: 44px;
  font-weight: 600;
  color: #020022;
`;

export const Description = styled.div<{ arrayLength: number }>(
  ({ arrayLength }) => {
    return `
  font-family: ${
    arrayLength === 2 ? `"Francois One", sans-serif` : `"Chivo Mono", monospace`
  };
  font-size: ${arrayLength === 2 ? "30px" : "22px"};
  font-weight: ${arrayLength === 2 ? "600" : "400"};
  font-style: ${arrayLength === 2 ? "initial" : "italic"};
  color: ${arrayLength === 2 ? "#000238" : "#8b8b8b"};
`;
  }
);

export const NextButton = styled.div`
  font-size: 24px;
  font-weight: 500;
  width: max-content;
  padding: 10px 30px;
  text-align: center;
  margin: 30px auto 100px;
  color: orange;
  border: solid 2px orange;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.2s;

  &:hover,
  &:active {
    background-color: rgba(255, 165, 0, 0.2);
  }

  @media (max-width: 680px) {
    align-self: flex-end;
    margin: 0 auto 50px;
    font-size: 40px;
    border-width: 3px;
  }
`;
