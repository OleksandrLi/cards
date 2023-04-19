import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
  0% { transform: rotateY(0deg) scale(1); }
  50% { transform: rotateY(180deg) scale(0.9); }
  100% { transform: rotateY(360deg) scale(1); }
`;

const opacity = keyframes`
  0% { opacity: 1; }
  10% { opacity: 1; }
  11% { opacity: 0; }
  80% { opacity: 0; }
  81% { opacity: 1; }
  100% { opacity: 1; }
`;

export const WordContainer = styled("div")<{
  isRotate?: boolean;
}>(({ isRotate }) => {
  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px 30px;
    margin: auto;
    max-width: 400px;
    background: #ffffff;
    border-color: #729eff;
    border-style: solid;
    border-width: 35px 5px 5px;
    animation-name: ${isRotate ? rotate : "none"};
    animation-duration: 1s;

    div {
      margin: 10px 0;
      animation-name: ${isRotate ? opacity : "none"};
      animation-duration: 1s;
    }

    @media (max-width: 680px) {
      width: 100%;
      box-sizing: border-box;
      margin-top: 20px;
      padding: 60px 0 50px;
    }
  `;
});

export const EnglishWord = styled.div`
  font-size: 44px;
  font-weight: 600;
  color: #020022;
`;

export const Description = styled.div<{ arrayLength: number }>(
  ({ arrayLength }) => {
    return css`
      font-family: ${arrayLength === 2
        ? `"Francois One", sans-serif`
        : `"Chivo Mono", monospace`};
      font-size: ${arrayLength === 2 ? "30px" : "22px"};
      font-weight: ${arrayLength === 2 ? "600" : "400"};
      font-style: ${arrayLength === 2 ? "initial" : "italic"};
      color: ${arrayLength === 2 ? "#000238" : "#8b8b8b"};
      padding: 0 10px;
      text-align: center;
    `;
  }
);
