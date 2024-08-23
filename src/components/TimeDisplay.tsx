import React, { useState, useEffect } from "react";
import { formatTime } from "../util/utils";

// Custom hook for managing time updates
const useCurrentTime = (updateInterval: number = 1000) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, updateInterval);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [updateInterval]);

  return currentTime;
};

const BSTTimeDisplay: React.FC = () => {
  const currentTime = useCurrentTime();

  const formattedBstTime = currentTime
    .toLocaleTimeString("en-GB", {
      timeZone: "Europe/London",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
      hour12: false,
    })
    .replace(/^24:/, "00:");

  return <div>{formattedBstTime}</div>;
};

const LocalTimeDisplay: React.FC = () => {
  const currentTime = useCurrentTime();

  const userLocale = navigator.language;

  const timeZoneName = new Intl.DateTimeFormat(userLocale, {
    timeZoneName: "short",
  })
    .format(currentTime)
    .split(" ")
    .pop();

  const formattedLocalTime = formatTime(currentTime);

  return (
    <div>
      {formattedLocalTime} {timeZoneName}
    </div>
  );
};

export { BSTTimeDisplay, LocalTimeDisplay };
