import React, { useEffect, useState } from "react";

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
    .replace(/^24:/, "00:")
    .split(" ")
    .shift();

  return <div>{formattedBstTime}</div>;
};

const BSTTimeZone: React.FC = () => {
  const currentTime = useCurrentTime();

  const bstTime = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    timeZoneName: "long",
  }).format(new Date());

  const bstTimeZone = bstTime.split(", ").pop();

  return <div>{bstTimeZone}</div>;
};

export { BSTTimeDisplay, BSTTimeZone };

