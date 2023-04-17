import styled, { css } from "styled-components";

export const Container = styled.div<{
  isOpen: boolean;
  positionX?: number;
  positionY?: number;
}>(({ isOpen, positionX, positionY }) => {
  return css`
    transform: ${isOpen ? "scale(1)" : "scale(0)"};
    position: absolute;
    top: ${positionY}%;
    left: ${positionX}%;
    flex-direction: column;
    gap: 20px;
    margin: 0;
    border-radius: 12px;
    padding: 10px 16px;
    background: #e8f7ff;
    box-shadow: rgba(0, 0, 0, 0.25) 0 0 10px 4px;
    overflow: hidden;
    overflow-y: auto;
    font-size: 14px;
    line-height: 18px;
    z-index: 20;
    transition-duration: ${isOpen ? "250ms" : "10ms"};
  `;
});

export const MobileContainer = styled.div<{
  isOpen: boolean;
}>(({ isOpen }) => {
  return css`
    display: ${isOpen ? "flex" : "none"};
    position: fixed;
    z-index: 15;
  `;
});

export const MobileBackground = styled.div<{
  isOpen: boolean;
}>(({ isOpen }) => {
  return css`
    position: fixed;
    display: ${isOpen ? "flex" : "none"};
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0);
  `;
});

export const PositionContainer = styled.div<{
  mobileY: number;
}>(({ mobileY }) => {
  return css`
    position: relative;
    width: 100vw;
    height: ${mobileY}px;
  `;
});

export const MobileBoxContainer = styled(Container)`
  position: relative;
  left: -20px;
  width: max-content;
  margin: auto;
`;
