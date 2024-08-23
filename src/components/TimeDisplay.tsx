import React, { useState, useEffect } from "react";
import { formatTime, getTimeZoneAbbreviation } from "../util/utils";

const BSTTimeDisplay: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 500); // Update time every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Calculate BST time
  const bstTimeZone = "Europe/London";
  const bstTime = formatTime(currentTime, bstTimeZone);
  const bstAbbreviation = getTimeZoneAbbreviation(currentTime, bstTimeZone);

  return (
    <div>
      {bstTime} {bstAbbreviation}
    </div>
  );
};

const LocalTimeDisplay: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update time every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Get user's local time and time zone
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localTime = formatTime(currentTime, userTimeZone);
  const localAbbreviation = getTimeZoneAbbreviation(currentTime, userTimeZone);

  return (
    <div>
      {localTime} {localAbbreviation}
    </div>
  );
};

export { BSTTimeDisplay, LocalTimeDisplay };
