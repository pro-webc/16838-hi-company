type Props = {
  variant?: 'paper' | 'duct' | 'horizon';
};

export default function HeroBackground({ variant = 'paper' }: Props) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`paperGrad-${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FAF8F3" />
          <stop offset="55%" stopColor="#F6F2E6" />
          <stop offset="100%" stopColor="#EFE9D6" />
        </linearGradient>
        <radialGradient id={`light-${variant}`} cx="78%" cy="18%" r="62%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`shade-${variant}`} cx="14%" cy="92%" r="55%">
          <stop offset="0%" stopColor="#1A1A1A" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0" />
        </radialGradient>
        <pattern id={`grain-${variant}`} x="0" y="0" width="3" height="3" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="0.45" fill="#1A1A1A" fillOpacity="0.05" />
        </pattern>
        <pattern id={`fins-${variant}`} x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
          <line x1="0" y1="7" x2="14" y2="7" stroke="#1A1A1A" strokeOpacity="0.06" strokeWidth="0.5" />
        </pattern>
        <pattern id={`vfins-${variant}`} x="0" y="0" width="9" height="9" patternUnits="userSpaceOnUse">
          <line x1="4.5" y1="0" x2="4.5" y2="9" stroke="#1A1A1A" strokeOpacity="0.05" strokeWidth="0.5" />
        </pattern>
      </defs>

      <rect width="1600" height="900" fill={`url(#paperGrad-${variant})`} />
      <rect width="1600" height="900" fill={`url(#light-${variant})`} />
      <rect width="1600" height="900" fill={`url(#shade-${variant})`} />

      {/* mid plane — distant building */}
      <rect x="980" y="120" width="540" height="700" fill="#1A1A1A" fillOpacity="0.018" />
      {/* near plane — air handler unit silhouette */}
      <g opacity="0.9">
        <rect x="1080" y="220" width="420" height="520" fill="#1A1A1A" fillOpacity="0.028" />
        <rect x="1080" y="220" width="420" height="520" fill={`url(#vfins-${variant})`} />
        <rect x="1080" y="220" width="420" height="36" fill="#1A1A1A" fillOpacity="0.05" />
        <rect x="1080" y="704" width="420" height="36" fill="#1A1A1A" fillOpacity="0.05" />
        {/* louver fins inside */}
        <rect x="1118" y="280" width="344" height="380" fill={`url(#fins-${variant})`} />
        {/* small bolts */}
        <circle cx="1098" cy="240" r="2" fill="#1A1A1A" fillOpacity="0.18" />
        <circle cx="1482" cy="240" r="2" fill="#1A1A1A" fillOpacity="0.18" />
        <circle cx="1098" cy="722" r="2" fill="#1A1A1A" fillOpacity="0.18" />
        <circle cx="1482" cy="722" r="2" fill="#1A1A1A" fillOpacity="0.18" />
      </g>

      {/* duct line connecting to near unit */}
      <path
        d="M 0 760 L 720 760 L 760 720 L 1080 720"
        stroke="#1A1A1A"
        strokeOpacity="0.12"
        strokeWidth="0.5"
        fill="none"
      />
      {/* horizon hairline */}
      <line x1="80" y1="650" x2="1520" y2="650" stroke="#1A1A1A" strokeOpacity="0.18" strokeWidth="0.5" />
      {/* tiny accent tick */}
      <line x1="80" y1="650" x2="160" y2="650" stroke="#C9A24A" strokeOpacity="0.7" strokeWidth="1" />

      <rect width="1600" height="900" fill={`url(#grain-${variant})`} />
    </svg>
  );
}