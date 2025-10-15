import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizes = {
    sm: { width: 140, height: 45 },
    md: { width: 200, height: 65 },
    lg: { width: 260, height: 85 },
  };

  const { width, height } = sizes[size];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 260 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Elegant Gown/Dress Silhouette */}
      <g transform="translate(15, 10)">
        {/* Dress bodice - upper part */}
        <path
          d="M 20 8 Q 20 5 22 5 L 28 5 Q 30 5 30 8 L 32 18 L 18 18 Z"
          fill="#E9A7B5"
          stroke="#D49AAE"
          strokeWidth="1"
        />
        
        {/* Dress waist - fitted */}
        <path
          d="M 18 18 L 20 25 L 30 25 L 32 18 Z"
          fill="#F4C8D2"
          stroke="#D49AAE"
          strokeWidth="1"
        />
        
        {/* Dress skirt - flowing gown */}
        <path
          d="M 20 25 Q 10 35 8 50 Q 8 52 10 52 L 40 52 Q 42 52 42 50 Q 40 35 30 25 Z"
          fill="#D49AAE"
          stroke="#3B2C2E"
          strokeWidth="1.5"
        />
        
        {/* Inner dress detail - lighter layer */}
        <path
          d="M 22 28 Q 15 38 14 48 L 36 48 Q 35 38 28 28 Z"
          fill="#FDF7F9"
          opacity="0.6"
        />
        
        {/* Decorative dress accent lines */}
        <path
          d="M 20 30 Q 18 35 17 40"
          stroke="#E9A7B5"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M 30 30 Q 32 35 33 40"
          stroke="#E9A7B5"
          strokeWidth="1"
          fill="none"
        />
        
        {/* Neckline detail */}
        <ellipse
          cx="25"
          cy="8"
          rx="3"
          ry="2"
          fill="#FDF7F9"
        />
        
        {/* Hanger hook at top */}
        <path
          d="M 25 2 L 25 5"
          stroke="#3B2C2E"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="25"
          cy="1.5"
          r="1.5"
          fill="none"
          stroke="#3B2C2E"
          strokeWidth="1.5"
        />
      </g>

      {/* Brand name - Padmas Collection */}
      <text
        x="75"
        y="35"
        fontFamily="Playfair Display, serif"
        fontSize="24"
        fontWeight="700"
        fill="#3B2C2E"
        letterSpacing="1"
      >
        Padmas
      </text>
      
      {/* Decorative line with dots */}
      <line 
        x1="75" 
        y1="45" 
        x2="180" 
        y2="45" 
        stroke="#D49AAE" 
        strokeWidth="2"
      />
      <circle cx="85" cy="45" r="2" fill="#E9A7B5" />
      <circle cx="170" cy="45" r="2" fill="#F4C8D2" />
      
      <text
        x="75"
        y="62"
        fontFamily="Inter, sans-serif"
        fontSize="13"
        fontWeight="500"
        fill="#D49AAE"
        letterSpacing="3"
      >
        COLLECTION
      </text>

      {/* Decorative elements - fashion accents */}
      <g transform="translate(185, 25)">
        {/* Small dress icon accent */}
        <path
          d="M 5 0 L 5 3 L 3 8 L 7 8 L 5 3 Z"
          fill="#E9A7B5"
          opacity="0.7"
        />
        <path
          d="M 12 0 L 12 3 L 10 8 L 14 8 L 12 3 Z"
          fill="#F4C8D2"
          opacity="0.7"
        />
        <path
          d="M 19 0 L 19 3 L 17 8 L 21 8 L 19 3 Z"
          fill="#D49AAE"
          opacity="0.7"
        />
      </g>
    </svg>
  );
}

// Simplified version for smaller spaces - Icon only
export function LogoIcon({ className = '', size = 50 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Elegant Dress Icon */}
      <g transform="translate(5, 5)">
        {/* Hanger hook */}
        <path
          d="M 20 2 L 20 8"
          stroke="#3B2C2E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="20"
          cy="1.5"
          r="2"
          fill="none"
          stroke="#3B2C2E"
          strokeWidth="2"
        />
        
        {/* Dress bodice */}
        <path
          d="M 15 10 Q 15 8 17 8 L 23 8 Q 25 8 25 10 L 27 20 L 13 20 Z"
          fill="#E9A7B5"
          stroke="#D49AAE"
          strokeWidth="1.5"
        />
        
        {/* Dress waist */}
        <path
          d="M 13 20 L 15 28 L 25 28 L 27 20 Z"
          fill="#F4C8D2"
          stroke="#D49AAE"
          strokeWidth="1.5"
        />
        
        {/* Dress skirt - flowing */}
        <path
          d="M 15 28 Q 8 38 6 50 Q 6 52 8 52 L 32 52 Q 34 52 34 50 Q 32 38 25 28 Z"
          fill="#D49AAE"
          stroke="#3B2C2E"
          strokeWidth="2"
        />
        
        {/* Inner dress detail */}
        <path
          d="M 17 32 Q 12 40 11 48 L 29 48 Q 28 40 23 32 Z"
          fill="#FDF7F9"
          opacity="0.5"
        />
        
        {/* Neckline */}
        <ellipse
          cx="20"
          cy="10"
          rx="2.5"
          ry="1.5"
          fill="#FDF7F9"
        />
      </g>
    </svg>
  );
}
