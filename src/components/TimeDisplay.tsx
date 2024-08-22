import React, { useState, useEffect } from "react";
import { formatTime, getTimeZoneAbbreviation } from "../util/utils";

const TimeDisplay: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update time every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Format BST time
  const bstTime = formatTime(currentTime, "Europe/London");
  const bstAbbreviation = getTimeZoneAbbreviation(currentTime, "Europe/London");

  // Format user's local time
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localTime = formatTime(currentTime, userTimeZone);
  const localAbbreviation = getTimeZoneAbbreviation(currentTime, userTimeZone);

  return (
    <div>
      {bstTime} {bstAbbreviation} - {localTime} {localAbbreviation}
    </div>
  );
};

export default TimeDisplay;
