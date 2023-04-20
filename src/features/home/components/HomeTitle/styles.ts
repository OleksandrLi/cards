import styled from "styled-components";

export const NavigationTitle = styled.h2`
  margin-left: 35px;
  margin-bottom: 50px;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.home.title};

  @media (max-width: 680px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0;
    text-align: center;

    span {
      padding: 8px;
    }
  }
`;
