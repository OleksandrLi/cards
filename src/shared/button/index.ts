import styled from "styled-components";

export const ButtonOrange = styled.div`
  font-size: 22px;
  font-weight: ${({ theme }) => theme.sizes.button.weight};
  width: max-content;
  padding: 8px 26px;
  text-align: center;
  margin: 30px auto 100px;
  color: #ffa500;
  border: solid ${({ theme }) => theme.sizes.button.border} #ffa500;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.2s;

  &:hover,
  &:active {
    background-color: #ffa50033;
  }

  @media (max-width: 680px) {
    align-self: flex-end;
    margin: 20px auto 30px;
    font-size: 28px;
  }
`;

export const ButtonBlue = styled(ButtonOrange)`
  color: #003cff;
  border: solid ${({ theme }) => theme.sizes.button.border} #003cff;

  &:hover,
  &:active {
    background-color: rgba(0, 60, 255, 0.1);
  }
`;
