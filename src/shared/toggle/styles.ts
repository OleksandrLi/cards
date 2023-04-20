import styled, { css } from "styled-components";

export const ToggleContainer = styled.div`
  cursor: pointer;
  display: block;
  width: 40px;
  height: 22px;
  position: relative;
  -webkit-tap-highlight-color: transparent;
`;

export const Background = styled.div`
  width: 40px;
  height: 20px;
  margin: auto;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid ${({ theme }) => theme.colors.themeToggle};
`;

export const Slider = styled.div<{ isChecked: boolean }>(({ isChecked }) => {
  return css`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    border-radius: 9px;
    background-color: ${({ theme }) => theme.colors.themeToggle};
    transition-duration: 200ms;
    transform: ${isChecked ? "translateX(20px)" : "translateX(0)"};
  `;
});
