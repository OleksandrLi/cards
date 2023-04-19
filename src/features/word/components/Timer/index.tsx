import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import Loader from "./TimerLoader";

type TimerProps = {
  isRotate: boolean;
};

const Timer: React.FC<TimerProps> = ({ isRotate }) => {
  const leftTimeForWord = localStorage.getItem("leftForThisWord");

  const leftTime = dayjs(leftTimeForWord).diff(
    dayjs().startOf("seconds"),
    "seconds"
  );

  const minutes = Math.floor((Number(leftTime) / 60) % 60);
  const seconds = Math.floor(Number(leftTime) % 60);

  const [clock, setClock] = useState(
    leftTime
      ? `${minutes <= 0 ? "00" : minutes < 10 ? `0${minutes}` : seconds}:${
          seconds <= 0 ? "00" : seconds < 10 ? `0${seconds}` : seconds
        }`
      : null
  );

  const getTime = (interval: NodeJS.Timer, isRotate: boolean) => {
    if (isRotate) {
      setClock(null);
      clearInterval(interval);
    }

    const timePerCard = localStorage.getItem("time");
    const leftTimeForWord = localStorage.getItem("leftForThisWord");

    let leftTimeF;

    if (leftTimeForWord) {
      leftTimeF = dayjs(leftTimeForWord).diff(
        dayjs().startOf("seconds"),
        "seconds"
      );
    } else {
      leftTimeF = dayjs()
        .startOf("seconds")
        .add(Number(timePerCard), "seconds")
        .diff(dayjs().startOf("seconds"), "seconds");
    }

    const deadline = dayjs()
      .add(Number(leftTimeF), "seconds")
      .startOf("seconds");

    const dateNow = dayjs().startOf("seconds");
    const time = deadline.diff(dateNow, "seconds");

    if (deadline.diff(dateNow, "seconds") <= 0) {
      setClock("00:00");
    } else {
      const minutes = Math.floor((time / 60) % 60);
      const seconds = Math.floor(time % 60);
      setClock(
        `${minutes < 10 ? `0${minutes}` : seconds}:${
          seconds < 10 ? `0${seconds}` : seconds
        }`
      );
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (leftTime) {
      interval = setInterval(() => getTime(interval, isRotate), 1000);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>{isRotate ? <Loader /> : clock ? clock : <Loader />}</Container>
  );
};

export default Timer;
