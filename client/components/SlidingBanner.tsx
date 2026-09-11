import React from 'react';

interface SlidingBannerProps {
  className?: string;
}

export default function SlidingBanner({ className = '' }: SlidingBannerProps) {
  const messages = [
    "🚀 Professional Web & App Development at Affordable Prices!",
    "⚡ Static Website starting at ₹7,499 — Responsive, SEO Ready!",
    "🔥 Android & iOS Apps with Backend Integration — Starting ₹11,999!",
    "💯 Complete Business Package — Website + App + Software at ₹20,999!"
  ];

  return (
    <div className={`relative overflow-hidden bg-red-600 text-white py-2 ${className}`}>
      <div className="animate-slide-left-to-right whitespace-nowrap">
        {messages.map((message, index) => (
          <span key={index} className="inline-block px-8 font-bold text-sm mr-16">
            {message}
          </span>
        ))}
        {/* Duplicate messages to ensure continuous flow */}
        {messages.map((message, index) => (
          <span key={`duplicate-${index}`} className="inline-block px-8 font-bold text-sm mr-16">
            {message}
          </span>
        ))}
      </div>
    </div>
  );
}