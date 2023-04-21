import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 140px 140px;
  gap: 60px;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
`;

export const ButtonBlock = styled.div`
  cursor: pointer;
  padding: 15px 20px;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.sizes.wordCard.weight};
  text-align: center;
  border-width: ${({ theme }) => theme.sizes.wordCard.border};
  border-style: solid;
  border-radius: 12px;
  -webkit-tap-highlight-color: transparent;

  p {
    margin: 0;
  }
`;

export const SkipButton = styled(ButtonBlock)`
  background-color: ${({ theme }) => theme.colors.wordCard.buttons.skip.bg};
  border-color: ${({ theme }) => theme.colors.wordCard.buttons.skip.border};
  color: ${({ theme }) => theme.colors.wordCard.buttons.skip.text};
  transition-duration: 200ms;

  &:hover,
  &:active {
    background-color: ${({ theme }) =>
      theme.colors.wordCard.buttons.skip.hover};
  }
`;

export const NextButton = styled(ButtonBlock)`
  background-color: ${({ theme }) => theme.colors.wordCard.buttons.next.bg};
  border-color: ${({ theme }) => theme.colors.wordCard.buttons.next.border};
  color: ${({ theme }) => theme.colors.wordCard.buttons.next.text};
  transition-duration: 200ms;

  &:hover,
  &:active {
    background-color: ${({ theme }) =>
      theme.colors.wordCard.buttons.next.hover};
  }
`;

export const ButtonText = styled.p``;

export const Points = styled.p`
  padding-top: 10px;
`;
