import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.home.modal.bg};
  padding: 20px 20px 40px;
  border-radius: 16px;

  input {
    width: 80%;
    margin: auto;
  }
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.home.modal.text};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding-top: 40px;

  div {
    margin: 0;
  }
`;
