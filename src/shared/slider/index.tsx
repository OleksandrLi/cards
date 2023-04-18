import React, { useState } from "react";
import { SliderHorizontal, SliderText, SliderTitle } from "./styles";

export type SliderProps = {
  title: string;
  step: number;
  min: number;
  max: number;
};

const Slider: React.FC<SliderProps> = ({ title, step, min, max }) => {
  const [value, setValue] = useState<number>(0);

  return (
    <>
      <SliderTitle>{title}</SliderTitle>
      <SliderHorizontal
        className="horizontal-slider"
        thumbClassName="thumb"
        trackClassName="track"
        defaultValue={value}
        onChange={(value: any) => {
          setValue(value * 10);
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
