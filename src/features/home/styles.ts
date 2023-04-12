import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 20px;
  background: #ffffff;
  border-radius: 15px;
  border: 1px solid #e6e6e6;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.6);

  @media (max-width: 680px) {
    padding: 20px 0;
    box-shadow: none;
    border: none;
  }
`;

export const NavigationTitle = styled.h2`
  margin-left: 35px;
  font-size: 32px;
  color: #0402a3;
`;

export const SelectList = styled.table`
  table-layout: fixed;
  width: 100%;
`;

export const TR = styled.tr<{ disabled?: boolean }>(({ disabled }) => {
  return `
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
  cursor: ${disabled ? "initial" : "pointer"};
  border-bottom: 1px solid #e5e5e5;
  transition-duration: 0.2s;

  &:hover {
    background-color: ${disabled ? "initial" : "#f5f5f5"};
  }

  td {
    padding: 5px 5px 0;
    font-size: 20px;
    color: gray;
  }
  
  @media (max-width: 680px) {
    padding: 10px 20px;
  }
`;
});

export const IconTD = styled.td`
  display: flex;
  align-items: center;
  flex: 0.1;
  margin-right: 15px;

  span {
    font-size: 32px;
  }

  @media (max-width: 680px) {
    margin-right: 10px;
  }
`;

export const TD = styled.td<{ flex: number }>(({ flex }) => {
  return `
    padding: 10px 0;
    flex: ${flex};
    
    @media (max-width: 680px) {
      padding: 10px;
      flex: ${flex * 1.3};
      
      &:last-of-type {
        flex: ${flex};
      }
    }
    `;
});
