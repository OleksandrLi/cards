import styled from "styled-components";

export const RulesContainer = styled.div`
  background-color: #ffffff;
  padding: 20px 20px 40px;
  border-radius: 16px;
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 28px;
`;

export const ListOfRules = styled.ul`
  padding: 0 30px;

  @media (max-width: 680px) {
    padding: 0;
  }

  li {
    list-style-type: initial;
    list-style-position: outside;
    font-size: 20px;
    padding-left: 20px;
    margin: 12px 0;

    @media (max-width: 680px) {
      list-style-position: inside;
    }
  }
`;
