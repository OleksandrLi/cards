import styled from "styled-components";

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
    color: ${disabled ? "#adadad" : "#808080"};
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
