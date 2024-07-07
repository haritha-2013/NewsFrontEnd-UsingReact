import React, { useState, useEffect } from 'react';

const DateComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getDayOfWeek = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  };

  return (
    <div>
      <div>{getDayOfWeek(currentDate)}</div>
      <div>{currentDate.toLocaleDateString()}</div>
    </div>
  );
};

export default DateComponent;