import React from 'react'
import { useEffect, useState } from 'react';

const Timer = () => {
    const [remainingTime, setRemainingTime] = useState(10 * 60); // 10 minutes in seconds

    useEffect(() => {
      const intervalId = setInterval(() => {
        setRemainingTime(prevTime => prevTime - 1);
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

  return (
    <div><p>Time Remaining: {minutes}:{seconds < 10 ? '0' : ''}{seconds}</p></div>
  )
}

export default Timer