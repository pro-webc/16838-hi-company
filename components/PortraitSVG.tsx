export default function PortraitSVG() {
  return (
    <svg viewBox="0 0 600 800" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="ptBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5F1E8" />
          <stop offset="100%" stopColor="#E8E2D3" />
        </linearGradient>
        <radialGradient id="ptLight" cx="50%" cy="25%" r="55%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <pattern id="ptGrain" width="3" height="3" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="0.4" fill="#1A1A1A" fillOpacity="0.06" />
        </pattern>
      </defs>
      <rect width="600" height="800" fill="url(#ptBg)" />
      <rect width="600" height="800" fill="url(#ptLight)" />

      {/* abstract figure */}
      <g opacity="0.78">
        <ellipse cx="300" cy="290" rx="78" ry="92" fill="#1A1A1A" />
        <path d="M 170 800 L 170 490 Q 170 380 300 380 Q 430 380 430 490 L 430 800 Z" fill="#1A1A1A" />
        <path d="M 268 410 L 300 470 L 332 410" fill="none" stroke="#FAF8F3" strokeWidth="2.5" />
      </g>

      {/* abstract gauge / tool */}
      <g stroke="#1A1A1A" strokeWidth="0.6" fill="none" opacity="0.32">
        <circle cx="100" cy="170" r="46" />
        <circle cx="100" cy="170" r="32" />
        <circle cx="100" cy="170" r="14" />
        <line x1="100" y1="124" x2="100" y2="216" />
        <line x1="54" y1="170" x2="146" y2="170" />
        <line x1="100" y1="170" x2="128" y2="142" strokeWidth="1" />
      </g>

      {/* air-flow lines top right */}
      <g stroke="#6B7280" strokeWidth="0.5" fill="none" opacity="0.5">
        <path d="M 460 90 Q 530 140 480 200 T 520 320" />
        <path d="M 490 110 Q 560 160 510 220 T 550 340" />
        <path d="M 520 130 Q 590 180 540 240 T 580 360" />
      </g>

      {/* hairline rule */}
      <line x1="60" y1="730" x2="260" y2="730" stroke="#1A1A1A" strokeWidth="0.6" opacity="0.55" />

      <rect width="600" height="800" fill="url(#ptGrain)" />
    </svg>
  );
}