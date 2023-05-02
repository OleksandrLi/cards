import styled, { css } from "styled-components";

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
