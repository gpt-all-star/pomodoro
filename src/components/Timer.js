import React, { useEffect } from 'react';
import { CircularProgress } from "@chakra-ui/react";

const Timer = ({ initialMinutes = 25, initialSeconds = 0, start }) => {
  const [minutes, setMinutes] = React.useState(initialMinutes);
  const [seconds, setSeconds] = React.useState(initialSeconds);
  const [percent, setPercent] = React.useState(0);

  const zeroPad = (num, places) => String(num).padStart(places, '0');

  useEffect(() => {
    let timer;
    if (start) {
      timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timer);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
        setPercent(((minutes * 60 + seconds) / (initialMinutes * 60)) * 100);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [start, seconds]);

  return (
    <div>
      <CircularProgress value={percent} color="green.400" size="120px" thickness="10px" />
      <div>{`${zeroPad(minutes, 2)}:${zeroPad(seconds, 2)}`}</div>
    </div>
  );
};

export default Timer;
