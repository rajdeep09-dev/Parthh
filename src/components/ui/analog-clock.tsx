"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function AnalogClock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    // We want India Standard Time (IST) offset +5:30
    const updateClock = () => {
      const d = new Date();
      // Calculate IST time (UTC + 5.5 hours)
      const utc = d.getTime() + d.getTimezoneOffset() * 60000;
      const istDate = new Date(utc + 3600000 * 5.5);
      setTime(istDate);
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  if (!time) {
    return (
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-zinc-900 border-[8px] border-zinc-800 shadow-2xl flex items-center justify-center opacity-0 transition-opacity duration-500">
      </div>
    );
  }

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  // Calculate degrees for hands
  const secondDegrees = seconds * 6; // 360 / 60
  const minuteDegrees = minutes * 6 + seconds * 0.1; // 360/60 + 6/60
  const hourDegrees = hours * 30 + minutes * 0.5; // 360/12 + 30/60

  return (
    <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-zinc-900 border-[8px] border-zinc-800 shadow-2xl flex items-center justify-center">
      {/* Clock Face Background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-800 to-black opacity-50 shadow-inner"></div>

      {/* Clock Markers */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-full h-full p-2"
          style={{ transform: `rotate(${i * 30}deg)` }}
        >
          <div className={`w-1 mx-auto bg-zinc-600 rounded-full ${i % 3 === 0 ? 'h-3 bg-zinc-400' : 'h-1.5'}`} />
        </div>
      ))}

      {/* Center Dot */}
      <div className="absolute w-3 h-3 bg-white rounded-full z-20 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
      <div className="absolute w-1.5 h-1.5 bg-black rounded-full z-30"></div>

      {/* Hour Hand */}
      <motion.div
        className="absolute w-1.5 bg-white rounded-full origin-bottom z-10"
        style={{
          height: '25%',
          bottom: '50%'
        }}
        animate={{ rotate: hourDegrees }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />

      {/* Minute Hand */}
      <motion.div
        className="absolute w-1 bg-zinc-300 rounded-full origin-bottom z-10"
        style={{
          height: '35%',
          bottom: '50%'
        }}
        animate={{ rotate: minuteDegrees }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />

      {/* Second Hand */}
      <motion.div
        className="absolute w-0.5 bg-red-500 rounded-full origin-[center_75%] z-10"
        style={{
          height: '45%',
          bottom: '25%' // Offset to make tail cross the center
        }}
        animate={{ rotate: secondDegrees }}
        transition={{ type: "tween", ease: "linear", duration: 0.1 }}
      />

      {/* Location Label inside Clock */}
      <div className="absolute bottom-8 flex flex-col items-center">
         <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">INDIA</span>
         <span className="text-[8px] font-mono text-zinc-500 mt-0.5">{time.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute:'2-digit' })}</span>
      </div>
    </div>
  );
}
