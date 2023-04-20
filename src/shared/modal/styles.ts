import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 10;
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.modalBg};
`;

export const Box = styled.aside`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 24px 0;
  border-radius: 16px;
  padding: 24px;
  min-width: 512px;
  background: transparent;
  max-height: 80vh;
  overflow: hidden;
  overflow-y: auto;

  @media (max-width: 680px) {
    min-width: initial;
    width: 80%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  padding: 0;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0);

  span {
    padding: 14px;
    font-size: 30px;
    font-weight: 500;
    color: #000000;
  }
`;
