import React, { useState, useEffect } from 'react';

const StatusBar = () => {
  const [time, setTime] = useState('');

  // Fungsi untuk update waktu secara berkala
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Asia/Jakarta', // Ganti sesuai kebutuhan: Asia/Kolkata, UTC, dll
      };
      const timeString = now.toLocaleTimeString('en-GB', options);
      setTime(timeString);
    };

    updateTime(); // update langsung saat komponen mount
    const interval = setInterval(updateTime, 1000); // perbarui setiap detik

    return () => clearInterval(interval); // cleanup interval saat unmount
  }, []);

  return (
<div className="hidden md:flex fixed top-0 left-0 right-0 h-16 bg-black border-b border-[#1f1f1f] items-center justify-between px-6 md:px-40 py-10 z-20">
      {/* STATUS AVAILABILITY */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 bg-[#141415] px-6 py-3 rounded-full border border-[#1f1f1f]">
          <div className="w-2 h-2 bg-[#6DD33D] rounded-full"></div>
          <span
            className="text-sm text-[#CCCCCC]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Available For Work
          </span>
        </div>
      </div>

      {/* STATUS TIME */}
      <div
        className="text-sm text-[#CCCCCC]"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        Local Time (WIB)
        <span className="bg-[#141415] px-6 py-3 rounded-full ml-4 border border-[#1f1f1f]">
          {time}
        </span>
      </div>
    </div>
  );
};

export default StatusBar;
