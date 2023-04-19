import React from "react";
import { NextButton } from "../../../../shared/button/styles";

type NextProps = {
  setIsRotate: React.Dispatch<React.SetStateAction<boolean>>;
};

const Next: React.FC<NextProps> = ({ setIsRotate }) => {
  return (
    <NextButton
      onClick={() => {
        setIsRotate(true);
      }}
    >
      Next Word
    </NextButton>
  );
};

export default Next;
