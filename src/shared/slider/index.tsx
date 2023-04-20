import React from "react";
import { SliderHorizontal, SliderText, SliderTitle } from "./styles";

export type SliderProps = {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  title: string;
  step: number;
  min: number;
  max: number;
};

const Slider: React.FC<SliderProps> = ({
  value,
  setValue,
  title,
  step,
  min,
  max,
}) => {
  return (
    <>
      <SliderTitle>{title}</SliderTitle>
      <SliderHorizontal
        className="horizontal-slider"
        thumbClassName="thumb"
        trackClassName="track"
        defaultValue={value}
        onChange={(value: number | readonly number[] | undefined) => {
          setValue(Number(value) * 10);
        }}
        step={step}
        min={min}
        max={max}
        renderThumb={(props, state) => (
          <div {...props}>
            <SliderText>{state.valueNow * 10}</SliderText>
          </div>
        )}
      />
    </>
  );
};

export default Slider;
