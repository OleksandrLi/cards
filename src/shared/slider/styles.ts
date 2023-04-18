import ReactSlider from "react-slider";
import styled from "styled-components";

export const SliderTitle = styled.h4`
  margin: 0;
  padding-left: 6px;
`;

export const SliderHorizontal = styled(ReactSlider)`
  width: 100%;
  height: 70px;
  margin: auto;

  .thumb {
    cursor: pointer;
    position: absolute;
    z-index: 100;
    background: #ffffff;
    border: 5px solid #6200ee;
    border-radius: 100%;
    display: block;
    box-shadow: 0 0 2px 0 rgb(0 0 0 / 44%);
  }

  .thumb.active {
    background-color: #ffffff;
  }

  .track {
    position: relative;
    top: 20px;
    height: 4px;
    background: #6200ee;
    border-radius: 2px;
  }

  .track.track-0 {
    left: 10px !important;
    background: #6200ee;
  }

  .track.track-1 {
    right: 10px !important;
  }

  .thumb {
    top: 12px;
    width: 10px;
    outline: none;
    height: 10px;
    line-height: 38px;
  }

  .thumb.thumb-0 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SliderText = styled.div`
  margin-top: 50px;
  font-size: 18px;
  font-weight: 600;
  color: #000000;
`;
