import styled from "styled-components";
import { SliderTitle } from "../../../../shared/slider/styles";

export const Container = styled.div`
  display: block;
  margin-bottom: 30px;
`;

export const Title = styled(SliderTitle)``;

export const GameModeList = styled.ul`
  margin-top: 14px;
  padding-left: 6px;
  line-height: 24px;

  li {
    margin: 10px 0;
  }
`;
