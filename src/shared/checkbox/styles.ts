import styled, { css } from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 15px;

  & > div {
    display: flex;
    align-items: center;
  }

  span {
    color: #ffa500ff;
    font-size: 28px;
  }
`;

export const CheckSquare = styled.div<{
  isChecked: boolean;
}>(({ isChecked }) => {
  return css`
    display: flex;
    align-items: center;

    span {
      width: 18px;
      height: 18px;
      border: 2px solid #ffa500ff;
      border-radius: 4px;
      background-color: ${isChecked ? "#e89700" : "transparent"};
      transition-duration: 200ms;
    }
  `;
});

export const Checked = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  span {
    color: #ffffff;
    font-weight: 700;
    font-size: 22px;
  }
`;
