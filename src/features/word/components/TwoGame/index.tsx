import React from "react";
import Timer from "../Timer";

type TwoGameProps = {
  timeForWord: string | null;
  isRotate: boolean;
};

const TwoGame: React.FC<TwoGameProps> = ({ isRotate, timeForWord }) => {
  return (
    <>
      {timeForWord ? <Timer isRotate={isRotate} /> : null}
      <div>123</div>
    </>
  );
};

export default TwoGame;
