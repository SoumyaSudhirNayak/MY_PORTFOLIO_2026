import React from "react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export const TechIcon: React.FC<IconProps> = ({ name, size = 24, className = "" }) => {
  const normName = name.toLowerCase();

  switch (normName) {
    case "python":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M11.8 2c-4.8 0-4.5 2.1-4.5 2.1l.1 2.2h4.5v.6H5.7S2 6.4 2 11.4s3.3 4.8 3.3 4.8h1.9v-2.7s-.1-3.3 3.3-3.3h5.6s3.1.1 3.1-3.1V6.5S19.7 2 11.8 2zm-2.4 1.5a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z" fill="#3776AB"/>
          <path d="M12.2 22c4.8 0 4.5-2.1 4.5-2.1l-.1-2.2h-4.5v-.6h6.2s3.7.5 3.7-4.5-3.3-4.8-3.3-4.8h-1.9v2.7s.1 3.3-3.3 3.3H8s-3.1-.1-3.1 3.1v4.2S4.3 22 12.2 22zm2.4-1.5a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" fill="#FFD43B"/>
        </svg>
      );

    case "java":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M8.8 19.5c0 0-1.2.3 0 .5 2.2.4 5.5.4 7.6 0 1.2-.2 0-.5 0-.5s-2.1.6-7.6 0zM8.3 17.5c0 0-.9.2 0 .5 1.8.4 6.2.5 8.7 0 1.1-.2 0-.5 0-.5s-2.4.6-8.7 0zM12 2C8 2 5 3.5 5 5s3 3 7 3 7-1.5 7-3-3-3-7-3zm0 4.5C9 6.5 7 5.6 7 5s2-.9 5-.9 5 .4 5 .9-2 1.5-5 1.5z" fill="#F89820"/>
          <path d="M11 9.5c0 0-2 .5-1 1.5 1 1 2 2.5 4 2.5s3-1.5 3-2.5c0-1-2-1.5-6-1.5z" fill="#5382A1"/>
        </svg>
      );

    case "c":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#A8B9CC"/>
          <text x="12" y="17" fontFamily="sans-serif" fontSize="14" fontWeight="900" textAnchor="middle" fill="#00599C">C</text>
        </svg>
      );

    case "react":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(150 12 12)" />
        </svg>
      );

    case "node.js":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2L2 7.7v11.5L12 25l10-5.8V7.7L12 2zm-1 16.5l-5-2.9V10l5 2.9v5.6zm1-7.3L7 8.3l5-2.9 5 2.9-5 2.9zm6 4.4l-5 2.9v-5.6l5-2.9v5.6z" fill="#339933"/>
        </svg>
      );

    case "express.js":
    case "express":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#252525" stroke="#444" strokeWidth="1"/>
          <text x="12" y="16.5" fontFamily="monospace, sans-serif" fontSize="12" fontWeight="900" textAnchor="middle" fill="#FFFFFF">ex</text>
        </svg>
      );

    case "javascript":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <text x="18" y="19" fontFamily="sans-serif" fontSize="11" fontWeight="900" textAnchor="end" fill="#000000">JS</text>
        </svg>
      );

    case "typescript":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M12 18.5V11H14.5V18.5H12ZM8 12.5H10.5V18.5H8V12.5ZM6.5 11H12V12.5H6.5V11ZM13 11H18.5V12.5H13V11Z" fill="white" />
        </svg>
      );

    case "tailwind css":
    case "tailwind":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 6c-3.3 0-5.5 1.7-6.6 5 1.1-1.7 2.4-2.2 3.9-1.7 1 .3 1.6 1 2.4 1.8C13 12.4 14.7 14 18.6 14c3.3 0 5.5-1.7 6.6-5-1.1 1.7-2.4 2.2-3.9 1.7-1-.3-1.6-1-2.4-1.8C17.6 7.6 15.9 6 12 6zM5.4 14C2.1 14 0 15.7-.7 19c1.1-1.7 2.4-2.2 3.9-1.7 1 .3 1.6 1 2.4 1.8C7.3 20.4 9 22 12.9 22c3.3 0 5.5-1.7 6.6-5-1.1 1.7-2.4 2.2-3.9 1.7-1-.3-1.6-1-2.4-1.8-1.3-1.3-3-2.9-6.9-2.9z" fill="#38BDF8"/>
        </svg>
      );

    case "fastapi":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10" fill="#059669" />
          <path d="M13 5L6 14H12L11 19L18 10H12L13 5Z" fill="white" />
        </svg>
      );

    case "rest apis":
    case "rest api":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#0F172A"/>
          <path d="M5 12h14M15 7l4 5-4 5" stroke="#F5A900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );

    case "aws":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M18.8 14.5c-2.3 1.7-5.6 2.6-8.5 2.6-4.1 0-7.7-1.5-10.4-4.1-.2-.2 0-.5.2-.4 3 1.8 6.7 2.8 10.5 2.8 2.5 0 5.4-.6 7.8-1.7.4-.2.7.2.4.4zm.9-1.2c-.3-.4-1.9-.2-2.6-.1-.2 0-.3-.2-.1-.3 1.3-.9 2.7-.4 3 .2.3.6-.1 2.1-1.3 3.1-.2.2-.4.1-.3-.1.3-.8 1.6-2.5 1.3-2.8z" fill="#FF9900"/>
        </svg>
      );

    case "supabase":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M13.3 2.1c-.5-.7-1.6-.4-1.7.5l-1.3 9h8.4c.9 0 1.4 1 1 1.7L10.7 21.9c-.5.7-1.6.4-1.7-.5l1.3-9H1.9c-.9 0-1.4-1-1-1.7L13.3 2.1z" fill="#3ECF8E" />
        </svg>
      );

    case "postgresql":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <ellipse cx="12" cy="6" rx="8" ry="3" fill="#336791" fillOpacity="0.3" stroke="#336791" strokeWidth="1.5"/>
          <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#336791" strokeWidth="1.5"/>
          <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="#336791" strokeWidth="1.5"/>
        </svg>
      );

    case "mysql":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#00758F"/>
          <path d="M7 16V8l5 5 5-5v8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );

    case "mongodb":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2s-5.5 6.4-5.5 12.3c0 3 2.5 5.7 5.5 5.7s5.5-2.7 5.5-5.7C17.5 8.4 12 2 12 2zm0 16.5c-1.9 0-3.5-1.5-3.5-3.5 0-2.8 2.2-6.5 3.5-8.5 1.3 2 3.5 5.7 3.5 8.5 0 2-1.6 3.5-3.5 3.5z" fill="#47A248" />
        </svg>
      );

    case "git":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M23.5 11.2L12.8.5c-.7-.7-1.8-.7-2.5 0L8.7 2.1l3.3 3.3c.7-.2 1.6 0 2.2.6.8.8.8 2 0 2.8-.6.6-1.5.8-2.2.6l-3.1 3.1v4.8c.4.2.8.6.9 1.1.5.9.1 2.1-.8 2.6-1 .5-2.2.1-2.6-.8-.4-.8-.1-1.8.6-2.3v-5c-.7-.5-1-1.5-.6-2.3l-3.1-3.1L.5 11.2c-.7.7-.7 1.8 0 2.5l10.7 10.7c.7.7 1.8.7 2.5 0l10.7-10.7c.7-.7.7-1.8 0-2.5z" fill="#F05032"/>
        </svg>
      );

    case "figma":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83"/>
          <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF"/>
          <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#F24E1E"/>
          <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262"/>
          <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1ABCFE"/>
        </svg>
      );

    case "canva":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#00C4CC"/>
          <text x="12" y="17" fontFamily="sans-serif" fontSize="13" fontWeight="900" fontStyle="italic" textAnchor="middle" fill="white">C</text>
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#1E293B"/>
          <text x="12" y="16" fontFamily="sans-serif" fontSize="10" fontWeight="900" textAnchor="middle" fill="#F5A900">{name.slice(0, 3).toUpperCase()}</text>
        </svg>
      );
  }
};
