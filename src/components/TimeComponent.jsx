import React, { useState, useEffect } from 'react';

const TimeComponent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>{currentTime.toLocaleTimeString()}</div>
    </div>
  );
};

export default TimeComponent;
