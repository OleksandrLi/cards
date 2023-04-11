import styled from "styled-components";

export const NavigationTitle = styled.h2`
  margin-left: 35px;
  font-size: 32px;
  color: #0402a3;
`;

export const SelectList = styled.table`
  table-layout: fixed;
  width: 100%;

  tr {
    display: flex;
    flex-direction: row;
    padding: 10px 0;
    cursor: pointer;
    border-bottom: 1px solid #e5e5e5;
    transition-duration: 0.2s;

    &:hover {
      background-color: #f5f5f5;
    }

    td {
      padding: 5px 5px 0;
      font-size: 20px;
      color: gray;
    }
  }
`;

export const IconTD = styled.td`
  display: flex;
  align-items: center;
  flex: 0.1;

  span {
    font-size: 32px;
  }
`;

export const TD = styled.td<{ flex: number }>(({ flex }) => {
  return `
    padding: 10px;
    flex: ${flex};
    `;
});
