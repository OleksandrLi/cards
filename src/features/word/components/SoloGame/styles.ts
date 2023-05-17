import styled, { css, keyframes } from "styled-components";

/*
  WordCart
*/

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
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px 30px;
    margin: auto;
    max-width: 400px;
    background: ${({ theme }) => theme.colors.wordCard.bg};
    border-color: ${({ theme }) => theme.colors.wordCard.cardBorder};
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
  color: ${({ theme }) => theme.colors.wordCard.text};
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
      color: ${({ theme }) =>
        arrayLength === 2
          ? theme.colors.wordCard.translate
          : theme.colors.wordCard.transcription};
      padding: 0 10px;
      text-align: center;
    `;
  }
);

/*
  Buttons
*/

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
`;

export const ButtonBlock = styled.div`
  cursor: pointer;
  padding: 12px 26px;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.sizes.wordCard.weight};
  text-align: center;
  border-width: ${({ theme }) => theme.sizes.wordCard.border};
  border-style: solid;
  border-radius: 10px;
  -webkit-tap-highlight-color: transparent;

  p {
    margin: 0;
  }
`;

export const SkipButton = styled(ButtonBlock)`
  background-color: ${({ theme }) => theme.colors.wordCard.buttons.skipped.bg};
  border-color: ${({ theme }) => theme.colors.wordCard.buttons.skipped.border};
  color: ${({ theme }) => theme.colors.wordCard.buttons.skipped.text};
  transition-duration: 200ms;

  &:hover,
  &:active {
    background-color: ${({ theme }) =>
      theme.colors.wordCard.buttons.skipped.hover};
  }
`;

export const NextButton = styled(ButtonBlock)<{ disabled: boolean }>(
  ({ disabled }) => {
    return css`
      padding: 12px 36px;
      cursor: ${disabled ? "initial" : "pointer"};
      background-color: ${({ theme }) => theme.colors.wordCard.buttons.next.bg};
      border-color: ${({ theme }) =>
        disabled
          ? theme.colors.wordCard.buttons.next.disabled.border
          : theme.colors.wordCard.buttons.next.border};
      color: ${({ theme }) =>
        disabled
          ? theme.colors.wordCard.buttons.next.disabled.text
          : theme.colors.wordCard.buttons.next.text};
      transition-duration: 200ms;

      &:hover,
      &:active {
        ${({ theme }) =>
          disabled
            ? theme.colors.wordCard.buttons.next.disabled.hover
            : theme.colors.wordCard.buttons.next.hover};
      }
    `;
  }
);

export const GuessedButton = styled(ButtonBlock)`
  background-color: ${({ theme }) => theme.colors.wordCard.buttons.guessed.bg};
  border-color: ${({ theme }) => theme.colors.wordCard.buttons.guessed.border};
  color: ${({ theme }) => theme.colors.wordCard.buttons.guessed.text};
  transition-duration: 200ms;

  &:hover,
  &:active {
    background-color: ${({ theme }) =>
      theme.colors.wordCard.buttons.guessed.hover};
  }
`;

export const ButtonText = styled.p``;

export const Points = styled.p`
  padding-top: 10px;
`;
