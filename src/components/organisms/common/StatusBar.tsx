"use client";

import React, { useState, useEffect } from 'react';

interface StatusBadgeProps {
  children: React.ReactNode;
  className?: string;
}

const StatusBadge = ({ children, className = "" }: StatusBadgeProps) => (
  <div className={`flex items-center bg-[#141415] px-6 py-3 rounded-full border border-[#1f1f1f] ${className}`}>
    {children}
  </div>
);

const StatusBar: React.FC = () => {
  // Biarkan initial state kosong untuk menghindari perbedaan konten saat server-side rendering
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    // Fungsi update waktu
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Asia/Jakarta',
      };
      setTime(now.toLocaleTimeString('en-GB', options));
    };

    // Jalankan interval
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []); // Kosong berarti hanya jalan di client-side (setelah mount)

  return (
    <header className="hidden md:flex fixed top-0 left-0 right-0 h-16 bg-black border-b border-[#1f1f1f] items-center justify-between px-6 md:px-40 py-10 z-20 font-space-grotesk">
      <div className="flex items-center">
        <StatusBadge>
          <div className="w-2 h-2 bg-[#6DD33D] rounded-full mr-2 animate-pulse" />
          <span className="text-sm text-[#CCCCCC]">
            Available For Work
          </span>
        </StatusBadge>
      </div>

      <div className="text-sm text-[#CCCCCC] flex items-center">
        <span className="mr-4">Local Time (WIB)</span>
        <StatusBadge className="min-w-30 justify-center">
          {/* Jika time masih kosong (saat SSR), tampilkan placeholder. 
            Ini akan terisi otomatis setelah useEffect berjalan di browser.
          */}
          {time || '--:--:--'}
        </StatusBadge>
      </div>
    </header>
  );
};

export default StatusBar;