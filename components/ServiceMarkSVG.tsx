export default function ServiceMarkSVG() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="smBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FAF8F3" />
          <stop offset="100%" stopColor="#EFEADC" />
        </linearGradient>
        <radialGradient id="smLight" cx="80%" cy="20%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <pattern id="smGrain" width="3" height="3" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="0.4" fill="#1A1A1A" fillOpacity="0.05" />
        </pattern>
      </defs>
      <rect width="800" height="500" fill="url(#smBg)" />
      <rect width="800" height="500" fill="url(#smLight)" />

      {/* indoor unit */}
      <g opacity="0.85" transform="translate(120 180)">
        <rect x="0" y="0" width="380" height="80" fill="none" stroke="#1A1A1A" strokeWidth="1.2" />
        <rect x="0" y="0" width="380" height="14" fill="#1A1A1A" opacity="0.9" />
        <line x1="20" y1="32" x2="360" y2="32" stroke="#1A1A1A" strokeWidth="0.4" />
        <line x1="20" y1="42" x2="360" y2="42" stroke="#1A1A1A" strokeWidth="0.4" />
        <line x1="20" y1="52" x2="360" y2="52" stroke="#1A1A1A" strokeWidth="0.4" />
        <line x1="20" y1="62" x2="360" y2="62" stroke="#1A1A1A" strokeWidth="0.4" />
      </g>

      {/* air streams downward */}
      <g stroke="#6B7280" strokeWidth="0.6" fill="none" opacity="0.6">
        <path d="M 180 270 Q 190 340 160 420" />
        <path d="M 240 270 Q 250 340 220 420" />
        <path d="M 300 270 Q 310 340 280 420" />
        <path d="M 360 270 Q 370 340 340 420" />
        <path d="M 420 270 Q 430 340 400 420" />
      </g>

      {/* outdoor unit silhouette right */}
      <g opacity="0.18" transform="translate(560 280)">
        <rect x="0" y="0" width="160" height="100" fill="none" stroke="#1A1A1A" strokeWidth="1" />
        <circle cx="55" cy="50" r="32" fill="none" stroke="#1A1A1A" strokeWidth="1" />
        <circle cx="55" cy="50" r="20" fill="none" stroke="#1A1A1A" strokeWidth="0.5" />
        <circle cx="55" cy="50" r="8" fill="#1A1A1A" />
        <line x1="100" y1="20" x2="150" y2="20" stroke="#1A1A1A" strokeWidth="0.5" />
        <line x1="100" y1="40" x2="150" y2="40" stroke="#1A1A1A" strokeWidth="0.5" />
        <line x1="100" y1="60" x2="150" y2="60" stroke="#1A1A1A" strokeWidth="0.5" />
        <line x1="100" y1="80" x2="150" y2="80" stroke="#1A1A1A" strokeWidth="0.5" />
      </g>

      {/* connecting pipe */}
      <path d="M 500 220 Q 540 220 555 270 L 560 290" stroke="#1A1A1A" strokeWidth="0.8" fill="none" opacity="0.5" />

      <line x1="60" y1="450" x2="280" y2="450" stroke="#1A1A1A" strokeWidth="0.6" opacity="0.55" />
      <rect width="800" height="500" fill="url(#smGrain)" />
    </svg>
  );
}