import React, { useState, useEffect } from 'react';

interface CountdownProps {
  className?: string;
}

export default function Countdown({ className = '' }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  // Initialize countdown from localStorage or set a new end time
  useEffect(() => {
    const getInitialTime = () => {
      const savedEndTime = localStorage.getItem('countdownEndTime');
      
      if (savedEndTime) {
        const endTime = new Date(savedEndTime);
        const now = new Date();
        const timeDiff = endTime.getTime() - now.getTime();
        
        if (timeDiff > 0) {
          // Calculate remaining time
          const hours = Math.floor(timeDiff / (1000 * 60 * 60));
          const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
          
          return { hours, minutes, seconds };
        }
      }
      
      // Set new 24-hour countdown
      const newEndTime = new Date();
      newEndTime.setHours(newEndTime.getHours() + 24);
      localStorage.setItem('countdownEndTime', newEndTime.toISOString());
      
      return { hours: 23, minutes: 59, seconds: 59 };
    };

    setTimeLeft(getInitialTime());
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const savedEndTime = localStorage.getItem('countdownEndTime');
      
      if (savedEndTime) {
        const endTime = new Date(savedEndTime);
        const now = new Date();
        const timeDiff = endTime.getTime() - now.getTime();
        
        if (timeDiff > 0) {
          const hours = Math.floor(timeDiff / (1000 * 60 * 60));
          const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
          
          setTimeLeft({ hours, minutes, seconds });
        } else {
          // Reset to 24 hours when it reaches 0
          const newEndTime = new Date();
          newEndTime.setHours(newEndTime.getHours() + 24);
          localStorage.setItem('countdownEndTime', newEndTime.toISOString());
          setTimeLeft({ hours: 23, minutes: 59, seconds: 59 });
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <div className="text-xs font-semibold text-red-600">⏰ Offer ends in:</div>
      <div className="flex gap-1">
        <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold min-w-[24px] text-center">
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <div className="text-red-600 font-bold text-xs">:</div>
        <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold min-w-[24px] text-center">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <div className="text-red-600 font-bold text-xs">:</div>
        <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold min-w-[24px] text-center">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
      </div>
    </div>
  );
}