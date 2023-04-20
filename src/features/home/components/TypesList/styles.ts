import styled, { css } from "styled-components";

export const SelectList = styled.table`
  table-layout: fixed;
  width: 100%;
`;

export const TR = styled.tr<{ disabled?: boolean }>(({ disabled }) => {
  return css`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0;
    cursor: ${disabled ? "initial" : "pointer"};
    border-bottom: 1px solid ${({ theme }) => theme.colors.home.list.border};
    transition-duration: 0.2s;

    &:hover {
      background-color: ${({ theme }) =>
        disabled ? "initial" : theme.colors.home.list.hover};
    }

    td {
      padding: 5px 5px 0;
      font-size: 20px;
      color: ${({ theme }) =>
        disabled
          ? theme.colors.home.list.disabledText
          : theme.colors.home.list.text};
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
  return css`
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
