'use client';

import { useEffect, useState } from 'react';

export default function TimeDisplay() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().slice(0, 19).replace('T', ' '));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="
      text-xs
      px-2
      py-1
      bg-[#1553CE]/40
      rounded
      border border-[#2B74DD]/50
      shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]
    ">
      {time}
    </div>
  );
}